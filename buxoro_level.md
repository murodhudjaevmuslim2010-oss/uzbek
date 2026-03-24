import os
from rembg import remove
from PIL import Image

def remove_bg(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Successfully saved {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    images = ["npc_toshkent", "npc_samarqand", "npc_buxoro", "npc_xiva", "npc_fargona"]
    for img_name in images:
        input_file = f"{img_name}.png"
        output_file = f"{img_name}_nobg.png"
        if os.path.exists(input_file):
            remove_bg(input_file, output_file)
            # Replace original
            if os.path.exists(output_file):
                os.replace(output_file, input_file)
                print(f"Replaced original {input_file} with background-removed version.")
        else:
            print(f"File {input_file} not found.")
