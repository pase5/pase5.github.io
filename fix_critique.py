import os
import base64

filepath = 'index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Revert boxes to dark mode
content = content.replace('bg-white shadow-sm', 'bg-white/[0.02]')
content = content.replace('border-gray-200', 'border-white/5 backdrop-blur-md')
content = content.replace('hover:bg-gray-50', 'hover:bg-white/[0.04]')

text_replacements = [
    ('<h4 class="text-lg font-medium text-gray-900 mb-3">Vision & Clarity</h4>', '<h4 class="text-lg font-medium text-cyan-50/70 mb-3">Vision & Clarity</h4>'),
    ('<h4 class="text-lg font-medium text-gray-900 mb-3">Connectivity</h4>', '<h4 class="text-lg font-medium text-purple-50/70 mb-3">Connectivity</h4>'),
    ('<h4 class="text-lg font-medium text-gray-900 mb-3">Durability & Precision</h4>', '<h4 class="text-lg font-medium text-lime-50/70 mb-3">Durability & Precision</h4>'),
]
for old, new in text_replacements:
    content = content.replace(old, new)

# SVG Grid replacement back to white
old_svg = '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h40v40H0V0zm20 20h20v20H20v-20zm-20 0h20v20H0v-20z" fill="rgba(0,0,0,0.03)" fill-rule="evenodd"/></svg>'
new_svg = '<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h40v40H0V0zm20 20h20v20H20v-20zm-20 0h20v20H0v-20z" fill="rgba(255,255,255,0.03)" fill-rule="evenodd"/></svg>'

old_b64 = base64.b64encode(old_svg.encode('utf-8')).decode('utf-8')
new_b64 = base64.b64encode(new_svg.encode('utf-8')).decode('utf-8')
content = content.replace(old_b64, new_b64)

# Replace "Iconography" with "Logo Variations" and add subtle bg to that card
content = content.replace('<p class="absolute top-6 left-6 text-[10px] font-mono text-gray-500 uppercase \ntracking-widest">Iconography</p>', '<p class="absolute top-6 left-6 text-[10px] font-mono text-gray-400 uppercase \ntracking-widest">Logo Variations</p>')

# Update color palettes to make sense
# IRIS Palette: #204172, #4F84C4, #D2E4F9
iris_palette = '''
                                  <div class="flex-1 flex gap-2 h-full items-end">
                                      <div class="w-1/5 bg-[#204172] h-[30%] rounded-t-sm relative group/color cursor-crosshair hover:h-[40%] transition-all duration-300"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover/color:opacity-100 text-white font-mono">#204172</span></div>
                                      <div class="w-1/5 bg-[#4F84C4] h-[50%] rounded-t-sm relative group/color cursor-crosshair hover:h-[60%] transition-all duration-300"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover/color:opacity-100 text-white font-mono">#4F84C4</span></div>
                                      <div class="w-1/5 bg-[#8BB4E5] h-[70%] rounded-t-sm relative group/color cursor-crosshair hover:h-[80%] transition-all duration-300"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover/color:opacity-100 text-white font-mono">#8BB4E5</span></div>
                                      <div class="w-1/5 bg-[#D2E4F9] h-[90%] rounded-t-sm relative group/color cursor-crosshair hover:h-[100%] transition-all duration-300"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover/color:opacity-100 text-white font-mono">#D2E4F9</span></div>
                                      <div class="w-1/5 bg-[#F8FAFC] h-[100%] rounded-t-sm relative group/color cursor-crosshair hover:h-[110%] transition-all duration-300"><span class="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover/color:opacity-100 text-white font-mono">#F8FAFC</span></div>
                                  </div>
'''

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated index.html')
