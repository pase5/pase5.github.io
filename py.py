import os

folder = "poster"
extensions = (".png")

files = [f for f in os.listdir(folder) if f.lower().endswith(extensions)]
files.sort()

for i, file in enumerate(files, 1):
    old = os.path.join(folder, file)
    new = os.path.join(folder, f"{i}{os.path.splitext(file)[1]}")
    os.rename(old, new)

print("Image files renamed successfully!")
