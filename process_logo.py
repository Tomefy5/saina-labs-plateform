import sys
from PIL import Image

def analyze_and_clear_bg(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        data = img.getdata()
        
        newData = []
        for item in data:
            # item is (R, G, B, A)
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Success! Processed image saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_and_clear_bg(
        "/home/tomefy5/.gemini/antigravity/brain/93726125-f261-468c-b858-c14424c0fd49/media__1776355888507.png",
        "/home/tomefy5/Documents/Saina Labs/saina-labs-web/public/logo-saina-new.png"
    )
