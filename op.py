import os

def rename_image_files(folder):
    extensions = (".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif")

    files = [f for f in os.listdir(folder) if f.lower().endswith(extensions)]
    files.sort()

    # STEP 1 — Temporary rename
    for i, file in enumerate(files):
        old_path = os.path.join(folder, file)
        temp_path = os.path.join(folder, f"__temp__{i}{os.path.splitext(file)[1]}")
        os.rename(old_path, temp_path)

    # STEP 2 — Final rename
    temp_files = [f for f in os.listdir(folder) if f.startswith("__temp__")]
    temp_files.sort()

    for i, file in enumerate(temp_files, 1):
        ext = os.path.splitext(file)[1]
        os.rename(
            os.path.join(folder, file),
            os.path.join(folder, f"{i}{ext}")
        )

    print("✅ All images renamed safely!")

if __name__ == "__main__":
    folder = r"D:\vscode\port\poster"
    rename_image_files(folder)
