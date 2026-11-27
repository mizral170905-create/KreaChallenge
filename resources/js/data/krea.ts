import {
    Camera,
    Check,
    Clock3,
    Code2,
    Flame,
    Gift,
    Medal,
    Palette,
    PenLine,
    Play,
    Quote,
    Send,
    Sparkles,
    Target,
    TrendingUp,
    Trophy,
    Users,
} from '@lucide/vue';
import type { Component } from 'vue';

export const iconMap: Record<string, Component> = {
    sparkles: Sparkles,
    palette: Palette,
    'pen-line': PenLine,
    camera: Camera,
    quote: Quote,
    play: Play,
    code: Code2,
    target: Target,
    trophy: Trophy,
    medal: Medal,
    check: Check,
    clock: Clock3,
    flame: Flame,
    gift: Gift,
    send: Send,
    trending: TrendingUp,
    users: Users,
};

export const categories = [
    { name: 'Semua', icon: 'sparkles' },
    { name: 'Desain', icon: 'palette' },
    { name: 'Ilustrasi', icon: 'pen-line' },
    { name: 'Fotografi', icon: 'camera' },
    { name: 'Menulis', icon: 'quote' },
    { name: 'Video', icon: 'play' },
    { name: 'Development', icon: 'code' },
];

export const challenges = [
    {
        title: 'Poster untuk Perubahan',
        category: 'Desain',
        description:
            'Rancang poster yang mengajak orang peduli pada isu sosial di sekitarmu.',
        prize: 'Rp 15 jt',
        entries: '1.284',
        days: '12 hari',
        icon: 'palette',
        bg: 'linear-gradient(90deg, #7C3AED, #C026D3, #F43F5E)',
        mark: '01',
    },
    {
        title: '40 Hari 40 Warna',
        category: 'Ilustrasi',
        description:
            'Ceritakan perjalanan warna dan makna di balik setiap goresan karyamu.',
        prize: 'Rp 10 jt',
        entries: '876',
        days: '18 hari',
        icon: 'pen-line',
        bg: 'linear-gradient(90deg, #F97316, #F43F5E, #8B5CF6)',
        mark: '02',
    },
    {
        title: 'Sudut Kota yang Terlupa',
        category: 'Fotografi',
        description:
            'Abadikan detail kecil yang sering terlewat di keseharian kota tempatmu.',
        prize: 'Rp 12,5 jt',
        entries: '642',
        days: '9 hari',
        icon: 'camera',
        bg: 'linear-gradient(90deg, #0EA5E9, #6366F1, #A855F7)',
        mark: '03',
    },
    {
        title: 'Cerita dalam 100 Kata',
        category: 'Menulis',
        description:
            'Satu momen, seratus kata. Buktikan cerita pendek bisa meninggalkan kesan.',
        prize: 'Rp 8 jt',
        entries: '2.103',
        days: '21 hari',
        icon: 'quote',
        bg: 'linear-gradient(90deg, #14B8A6, #0EA5E9, #6366F1)',
        mark: '04',
    },
    {
        title: '60 Detik Inspirasi',
        category: 'Video',
        description:
            'Satu menit untuk menyampaikan ide yang bisa mengubah cara pandang orang.',
        prize: 'Rp 20 jt',
        entries: '418',
        days: '25 hari',
        icon: 'play',
        bg: 'linear-gradient(90deg, #F59E0B, #F97316, #EC4899)',
        mark: '05',
    },
    {
        title: 'UI untuk Masa Depan',
        category: 'Development',
        description:
            'Bayangkan antarmuka 2030 dan bangun prototipe yang terasa nyata.',
        prize: 'Rp 18 jt',
        entries: '953',
        days: '30 hari',
        icon: 'code',
        bg: 'linear-gradient(90deg, #22C55E, #14B8A6, #3B82F6)',
        mark: '06',
    },
];

export const steps = [
    {
        number: '01',
        title: 'Pilih tantangan',
        description:
            'Telusuri brief yang tersedia dan pilih satu yang bikin ide kamu langsung menyala.',
        icon: 'target',
    },
    {
        number: '02',
        title: 'Berkarya & kirim',
        description:
            'Eksplorasi tanpa batas, lalu unggah karyamu sebelum waktu pengumpulan berakhir.',
        icon: 'pen-line',
    },
    {
        number: '03',
        title: 'Dapat apresiasi',
        description:
            'Karyamu dinilai juri dan komunitas. Pemenang mendapat hadiah serta sorotan.',
        icon: 'trophy',
    },
];

export const prizes = [
    {
        place: 'Juara 1',
        amount: 'Rp 25.000.000',
        detail: 'Trophy + feature utama + akses mentor',
        icon: 'trophy',
        highlight: true,
    },
    {
        place: 'Juara 2',
        amount: 'Rp 12.000.000',
        detail: 'Medali + feature di galeri komunitas',
        icon: 'medal',
        highlight: false,
    },
    {
        place: 'Juara 3',
        amount: 'Rp 6.000.000',
        detail: 'Medali + merchandise eksklusif',
        icon: 'medal',
        highlight: false,
    },
];

export const testimonials = [
    {
        quote: 'Pertama kalinya aku berani publish karya ilustrasi. Komunitasnya suportif banget, feedback-nya bikin berkembang.',
        name: 'Nadia Putri',
        role: 'Ilustrator · Bandung',
        initials: 'NP',
        color: 'from-violet-500 to-fuchsia-500',
        featured: true,
    },
    {
        quote: 'Brief-nya jelas tapi tetap bebas. Aku jadi punya alasan untuk eksperimen yang nggak pernah aku coba sebelumnya.',
        name: 'Rizky Mahendra',
        role: 'UI Designer · Jakarta',
        initials: 'RM',
        color: 'from-amber-400 to-orange-600',
        featured: false,
    },
    {
        quote: 'Dari challenge ini aku dapat klien pertama. Karya yang aku kirim ternyata dilihat orang yang tepat.',
        name: 'Salsa Amelia',
        role: 'Fotografer · Yogyakarta',
        initials: 'SA',
        color: 'from-cyan-400 to-blue-600',
        featured: false,
    },
];

export const faqs = [
    {
        question: 'Apakah KreaChallenge gratis untuk diikuti?',
        answer: 'Ya, semua challenge bisa diikuti secara gratis. Kamu hanya perlu membuat akun untuk mengirim karya dan mengikuti proses penjurian.',
    },
    {
        question: 'Siapa saja yang boleh berpartisipasi?',
        answer: 'Siapa pun yang punya ide boleh join — desainer, ilustrator, fotografer, penulis, videographer, developer, atau bahkan kamu yang baru ingin mulai berkarya.',
    },
    {
        question: 'Bagaimana cara penilaian karyanya?',
        answer: 'Juri profesional menilai karya berdasarkan kreativitas, penerapan brief, dan kualitas eksekusi. Suara komunitas juga menjadi pertimbangan untuk kategori pilihan favorit.',
    },
    {
        question: 'Kapan hasil pemenang diumumkan?',
        answer: 'Pengumuman dilakukan maksimal 7 hari setelah masa pengumpulan berakhir. Kamu akan mendapat notifikasi lewat email dan pengumuman di halaman challenge.',
    },
    {
        question: 'Boleh mengirim lebih dari satu karya?',
        answer: 'Boleh. Setiap akun dapat mengirim hingga tiga karya per challenge, sehingga kamu bebas mengeksplorasi beberapa ide sekaligus.',
    },
];

export const dashboardStats = [
    {
        label: 'Tantangan aktif',
        value: '06',
        hint: 'Edisi 07 masih berjalan',
        icon: 'target',
        tone: 'lime',
    },
    {
        label: 'Karya terkirim',
        value: '03',
        hint: '2 menunggu feedback juri',
        icon: 'send',
        tone: 'violet',
    },
    {
        label: 'Skor komunitas',
        value: '1.280',
        hint: '+180 poin minggu ini',
        icon: 'trending',
        tone: 'cyan',
    },
    {
        label: 'Hadiah tersedia',
        value: 'Rp 25 jt',
        hint: 'Juara 1 challenge #07',
        icon: 'gift',
        tone: 'rose',
    },
];

export const challengeProgress = [72, 48, 31];

export const leaderboard = [
    {
        rank: 1,
        name: 'Nadia Putri',
        role: 'Ilustrator',
        initials: 'NP',
        points: '9.840',
        color: 'from-violet-500 to-fuchsia-500',
    },
    {
        rank: 2,
        name: 'Rizky Mahendra',
        role: 'UI Designer',
        initials: 'RM',
        points: '8.215',
        color: 'from-amber-400 to-orange-600',
    },
    {
        rank: 3,
        name: 'Salsa Amelia',
        role: 'Fotografer',
        initials: 'SA',
        points: '7.602',
        color: 'from-cyan-400 to-blue-600',
    },
];

export const activities = [
    {
        title: 'Karya kamu masuk top 10',
        detail: 'Poster untuk Perubahan · 2 jam lalu',
        icon: 'flame',
        tone: 'lime',
    },
    {
        title: 'Challenge baru dibuka',
        detail: '60 Detik Inspirasi · Kemarin',
        icon: 'target',
        tone: 'violet',
    },
    {
        title: 'Feedback dari juri',
        detail: '40 Hari 40 Warna · 2 hari lalu',
        icon: 'quote',
        tone: 'cyan',
    },
];
