import os
import subprocess
import urllib.request
from PIL import Image

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "realm")
REF_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "realm_reference")
os.makedirs(OUT_DIR, exist_ok=True)
os.makedirs(REF_DIR, exist_ok=True)

MASTER_URLS = {
    "hero-fortress": "https://lh3.googleusercontent.com/aida-public/AB6AXuBJB4NrVu2kAdRNYK8K0wU3BtCVs1sW2T7VBXPuQcANWyIwIGe-kEAVkj-4SmfnyhKJNmLQe8s8zpAs69DhOW8Qqx0To6iCHy3fQ32WI1csXL7GcpHHF87QRKd6Y-ndKyH5OYIXI06rlXwQLHzTSINZ8dGwuRttiBOzFkRiWO6vHV4rBGjrJEL-XD6zDb2vv1bZwDWqx5Oey2M9grjciFEs9n1s1rvtpu39TP8d78p37XZg_jtBiX7h=s1920",
    "world-map": "https://lh3.googleusercontent.com/aida-public/AB6AXuAo6Gw7bhIIVaPx2RB8ay4gaKJ7TG8gmdcUrIdgtDBFH_vLibi3cRMhIKYCYFQSt_U1ZDaMI3dwk9eovhe64fjJPTD4G9lDrNI9J1YpkddnF6scf4R2AzroIqTu2mbVomYfAeaq__6lOrxXiDEoK1sCb1lSIwVlEM1lrU26N9KneH5af5n0lbRRLDku7zfU2EDsJmTemPg6hwHzloP3VNsMuZTH4i_oDOy7LgfTT1EzSzRYocs_lzZ3=s1920",
    "blueprint-rag": "https://lh3.googleusercontent.com/aida-public/AB6AXuB6iClUdYmW5bY73QrHbUMul7TeuWLdUsKkr6erMA_4hcrBbSoobczbtbcid9RK-iGXkap-E-PlsAnXypuBmw5WF8IgPoaPZqeiqt35dEiLKh1jaIchFwBWRv62_-GsCpF_UpgMBCbGccJl-4uECqZgKqMYk5rfyEJU5GM0kWTKgH_B4OFKvP_4ap_zQsJGHwtrk9_1txzzZKQbDqBomngf8NP8RhGzrFmSB1iPbkdaXrpJejlxzZI_=s1920",
    "crest": "https://lh3.googleusercontent.com/aida-public/AB6AXuByzP6wPQDUapPOPPPg87n9NkWDrdL6wFNY4MokVfOT2xiKIXSv9JMplg3tRGPgfqqEs_lFO0gxvSGX04kRvxx0H7utHlJbi5QBi5OtSr57W2xWwfSFXFhiCTVDAT56yBs1oNAF3YSRlCJwkyNJQGMlKimiTTa-PxwW_nS_z3GXD3n6Sv_kXnU-d1_nu2ZAi2EWXw-9EQJl7ANGy1qDlQymf8U2lIbBgDA2iv-SG2XE-CdwpWEEAMPn=s1920",
}

print("=== 1. Downloading Master Source Images ===")
masters = {}
for name, url in MASTER_URLS.items():
    ref_path = os.path.join(REF_DIR, f"{name}-master.jpg")
    if not os.path.exists(ref_path):
        print(f"Downloading {name} master...")
        urllib.request.urlretrieve(url, ref_path)
    masters[name] = ref_path
    img = Image.open(ref_path)
    print(f"  {name}: {img.width}x{img.height}, {os.path.getsize(ref_path)/1024:.1f} KB")

# Also handle compute-node from existing if present
compute_orig = os.path.join(OUT_DIR, "compute-node.png")
if os.path.exists(compute_orig):
    ref_compute = os.path.join(REF_DIR, "compute-node-master.jpg")
    if not os.path.exists(ref_compute):
        img = Image.open(compute_orig)
        img.save(ref_compute, "JPEG", quality=95)
    masters["compute-node"] = ref_compute

TASKS = [
    {
        "name": "crest",
        "variants": [
            {"suffix": "-96", "width": 96, "height": 96},
            {"suffix": "", "width": 512, "height": 512},
        ],
    },
    {
        "name": "hero-fortress",
        "variants": [
            {"suffix": "-400", "width": 400},
            {"suffix": "-768", "width": 768},
            {"suffix": "", "width": 768},
        ],
    },
    {
        "name": "world-map",
        "variants": [
            {"suffix": "-480", "width": 480},
            {"suffix": "-768", "width": 768},
            {"suffix": "", "width": 768},
        ],
    },
    {
        "name": "blueprint-rag",
        "variants": [
            {"suffix": "-640", "width": 640},
            {"suffix": "-1200", "width": 1200},
            {"suffix": "", "width": 1200},
        ],
    },
    {
        "name": "compute-node",
        "variants": [
            {"suffix": "", "width": 512},
        ],
    },
]

print("\n=== 2. Generating Responsive WebP and AVIF Variants ===")

for task in TASKS:
    name = task["name"]
    master_path = masters[name]
    master_img = Image.open(master_path)
    
    for v in task["variants"]:
        suffix = v["suffix"]
        target_w = v.get("width")
        target_h = v.get("height")
        
        # Calculate aspect ratio resize
        if target_w and target_h:
            resized_w, resized_h = target_w, target_h
        elif target_w:
            scale = target_w / master_img.width
            resized_w = target_w
            resized_h = int(master_img.height * scale)
        else:
            resized_w, resized_h = master_img.width, master_img.height
            
        resized = master_img.resize((resized_w, resized_h), Image.Resampling.LANCZOS)
        
        # Intermediate high quality JPG for ffmpeg input
        temp_jpg = os.path.join(REF_DIR, f"{name}{suffix}-temp.jpg")
        resized.save(temp_jpg, "JPEG", quality=95)
        
        # Output paths
        out_webp = os.path.join(OUT_DIR, f"{name}{suffix}.webp")
        out_avif = os.path.join(OUT_DIR, f"{name}{suffix}.avif")
        out_jpg = os.path.join(OUT_DIR, f"{name}{suffix}.jpg")
        
        # 1. Save optimized fallback JPG
        resized.save(out_jpg, "JPEG", quality=82, optimize=True)
        
        # 2. Encode WebP with Pillow (lossy, quality 80)
        resized.save(out_webp, "WEBP", quality=80, method=6)
        
        # 3. Encode AVIF with ffmpeg (libaom-av1, crf 28)
        cmd = [
            "ffmpeg", "-y", "-loglevel", "error",
            "-i", temp_jpg,
            "-c:v", "libaom-av1",
            "-still-picture", "1",
            "-crf", "30",
            "-pix_fmt", "yuv420p",
            out_avif
        ]
        subprocess.run(cmd, check=True)
        
        jpg_sz = os.path.getsize(out_jpg) / 1024
        webp_sz = os.path.getsize(out_webp) / 1024
        avif_sz = os.path.getsize(out_avif) / 1024
        
        print(f"[{name}{suffix}] {resized_w}x{resized_h} -> JPG: {jpg_sz:.1f}KB | WebP: {webp_sz:.1f}KB | AVIF: {avif_sz:.1f}KB")

print("\nDone! All modern formats and responsive variants generated.")
