#version 300 es
/* 
   Deklarasi versi wajib diletakkan di BARIS PERTAMA (Baris 1) tanpa spasi/komentar di atasnya.
   Ini adalah kunci mutlak agar driver Intel Iris Xe Anda tidak memunculkan parser error lagi.
*/

precision mediump float;

// Mengubah format variabel input/output ke standar GLSL modern v300 es
in vec2 v_texcoord;
out vec4 fragColor;
uniform sampler2D tex;

void main() {
    // Fungsi texture2D diubah menjadi texture sesuai standar modern
    vec4 color = texture(tex, v_texcoord);
    
    // 1. RELAXED AMOLED BLACK (Kekuatan kompresi hitam 0.03 yang pas di mata Anda)
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    if (gray < 0.03) {
        color.rgb *= (gray * 10.0); 
    }
    
    // 2. BALANCED CONTRAST
    vec3 factor = (color.rgb - 0.5) * 1.15 + 0.5;
    color.rgb = mix(color.rgb, factor, 0.50);
    
    // 3. LEDAKAN WARNA COLORFUL (Vibrance Booster)
    color.rgb = mix(vec3(gray), color.rgb, 1.45); 
    
    // Output warna akhir dilemparkan ke variabel fragColor modern
    fragColor = color;
}

