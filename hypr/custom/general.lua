-- ============================================================================
-- END4 CUSTOM GENERAL CONFIGURATION (PURE LUA COMPLIANT)
-- ============================================================================

-- 1. Mendeklarasikan tabel lokal kosong agar sistem tidak mendeteksi 'nil value'
local config = {}

-- 2. Memasukkan parameter dekorasi shader AMOLED dan pembulatan sudut jendela
config.decoration = {
    screen_shader = "/home/alimzicus/.config/hypr/shaders/amoled.frag",
    rounding = 14,
    rounding_power = 3.0
}

-- 3. Melemparkan isi konfigurasi ke dalam compositor grafis global
return config

