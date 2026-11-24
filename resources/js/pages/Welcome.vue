<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import {
    ArrowLeft,
    ArrowRight,
    ArrowUpRight,
    AtSign,
    CalendarDays,
    CheckCircle2,
    Gift,
    Globe,
    Heart,
    Menu,
    Palette,
    Play,
    Plus,
    Quote,
    Rss,
    Send,
    Share2,
    Sparkles,
    Star,
    X,
    Zap,
} from '@lucide/vue';
import {
    categories,
    challenges,
    faqs,
    iconMap,
    prizes,
    steps,
    testimonials,
} from '@/data/krea';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { login, register } from '@/routes';

const mobileOpen = ref(false);
const activeCategory = ref('Semua');
const openFaq = ref<number | null>(0);
const track = ref<HTMLElement | null>(null);
const now = ref(Date.now());
const deadline = new Date('2026-12-31T23:59:59+07:00').getTime();
const navVisible = ref(true);
const scrolled = ref(false);
let lastScrollY = 0;
let timer: ReturnType<typeof setInterval> | undefined;

const onScroll = () => {
    const current = window.scrollY;
    scrolled.value = current > 60;

    if (current > lastScrollY && current > 120) {
        navVisible.value = false;
        mobileOpen.value = false;
    } else if (current < lastScrollY) {
        navVisible.value = true;
    }

    lastScrollY = current;
};

onMounted(() => {
    timer = setInterval(() => {
        now.value = Date.now();
    }, 1000);
    window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
    if (timer) clearInterval(timer);
    window.removeEventListener('scroll', onScroll);
});

const countdown = computed(() => {
    const diff = Math.max(0, deadline - now.value);
    const pad = (value: number) => String(value).padStart(2, '0');

    return {
        days: pad(Math.floor(diff / 86_400_000)),
        hours: pad(Math.floor((diff / 3_600_000) % 24)),
        minutes: pad(Math.floor((diff / 60_000) % 60)),
        seconds: pad(Math.floor((diff / 1000) % 60)),
    };
});

const countdownItems = computed(() => [
    { value: countdown.value.days, label: 'HARI' },
    { value: countdown.value.hours, label: 'JAM' },
    { value: countdown.value.minutes, label: 'MENIT' },
    { value: countdown.value.seconds, label: 'DETIK' },
]);

const filteredChallenges = computed(() =>
    activeCategory.value === 'Semua'
        ? challenges
        : challenges.filter((challenge) => challenge.category === activeCategory.value),
);

const navLinks = [
    { label: 'Tantangan', href: '#challenges' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Kategori', href: '#kategori' },
    { label: 'Hadiah', href: '#hadiah' },
];

const selectCategory = (name: string) => {
    activeCategory.value = name;
    track.value?.scrollTo({ left: 0, behavior: 'smooth' });
};

const scrollTrack = (direction: number) => {
    track.value?.scrollBy({ left: direction * 480, behavior: 'smooth' });
};
</script>

<template>
    <Head title="KreaChallenge — Ruang untuk ide yang berani">
        <meta
            name="description"
            content="Ikuti challenge kreatif bulanan, kolaborasi dengan komunitas, dan menangkan hadiah nyata di KreaChallenge."
        />
    </Head>

    <div
        class="min-h-screen overflow-x-hidden bg-[#08080C] font-sans text-white antialiased selection:bg-[#D7FF3E] selection:text-[#08080C]"
    >
        <!-- Top ribbon -->
        <div class="relative h-9 overflow-hidden bg-[#D7FF3E] text-[#08080C]">
            <div
                class="krea-marquee flex h-full w-max items-center whitespace-nowrap text-[10px] font-bold tracking-[0.22em] sm:text-[11px]"
            >
                <span v-for="copy in 2" :key="copy" class="flex items-center">
                    <span v-for="item in 4" :key="item" class="flex items-center">
                        CHALLENGE #07 · VISUAL RASA · PENDAFTARAN DIBUKA · 12.400+ KREATOR ·
                        <span class="mx-6 text-base leading-none">✳</span>
                    </span>
                </span>
            </div>
        </div>

        <!-- Floating pill navigation -->
        <div
            class="pointer-events-none fixed inset-x-0 z-50 flex justify-center px-4 transition-[top,transform,opacity] duration-300 ease-out"
            :class="[
                scrolled ? 'top-3' : 'top-12',
                navVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0',
            ]"
        >
            <header
                class="pointer-events-auto relative w-full max-w-6xl rounded-full border border-white/10 bg-[#111119]/85 px-4 py-2.5 shadow-[0_24px_60px_-25px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:px-6"
            >
                <div class="flex items-center justify-between gap-4">
                    <a href="#top" class="flex items-center gap-2.5" aria-label="KreaChallenge home">
                        <svg viewBox="0 0 40 40" class="h-8 w-8 shrink-0" aria-hidden="true">
                            <rect width="40" height="40" rx="12" fill="#D7FF3E" />
                            <path
                                d="M20 9.5v21M9.5 20h21M12.6 12.6l14.8 14.8M27.4 12.6L12.6 27.4"
                                stroke="#08080C"
                                stroke-width="3.2"
                                stroke-linecap="round"
                            />
                        </svg>
                        <span class="text-[17px] font-bold tracking-tight sm:text-[19px]"
                            >Krea<span class="text-[#D7FF3E]">Challenge</span></span
                        >
                    </a>

                    <nav class="hidden items-center gap-7 lg:flex">
                        <a
                            v-for="link in navLinks"
                            :key="link.href"
                            :href="link.href"
                            class="text-[13px] font-semibold text-white/55 transition hover:text-[#D7FF3E]"
                            >{{ link.label }}</a
                        >
                    </nav>

                    <div class="hidden items-center gap-4 md:flex">
                        <Link
                            :href="login()"
                            class="text-[13px] font-semibold text-white/60 transition hover:text-white"
                            >Masuk</Link
                        >
                        <Link
                            :href="register()"
                            class="inline-flex items-center gap-2 rounded-full bg-[#D7FF3E] px-5 py-2.5 text-[13px] font-bold text-[#08080C] transition hover:bg-white"
                        >
                            Gabung gratis <ArrowUpRight class="h-4 w-4" />
                        </Link>
                    </div>

                    <button
                        type="button"
                        class="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
                        :aria-label="mobileOpen ? 'Tutup menu' : 'Buka menu'"
                        @click="mobileOpen = !mobileOpen"
                    >
                        <X v-if="mobileOpen" class="h-4 w-4" />
                        <Menu v-else class="h-4 w-4" />
                    </button>
                </div>

                <div
                    v-if="mobileOpen"
                    class="absolute left-0 right-0 top-[calc(100%+10px)] rounded-3xl border border-white/10 bg-[#111119]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
                >
                    <a
                        v-for="link in navLinks"
                        :key="link.href"
                        :href="link.href"
                        class="block rounded-xl px-4 py-3 text-sm font-semibold text-white/70 hover:bg-white/5 hover:text-[#D7FF3E]"
                        @click="mobileOpen = false"
                        >{{ link.label }}</a
                    >
                    <div class="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                        <Link
                            :href="login()"
                            class="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-semibold"
                            >Masuk</Link
                        >
                        <Link
                            :href="register()"
                            class="rounded-xl bg-[#D7FF3E] px-4 py-3 text-center text-sm font-bold text-[#08080C]"
                            >Gabung gratis</Link
                        >
                    </div>
                </div>
            </header>
        </div>

        <main id="top">
            <!-- Poster hero -->
            <section class="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44">
                <div class="krea-grid pointer-events-none absolute inset-0 opacity-40"></div>
                <div
                    class="pointer-events-none absolute -left-40 top-0 h-[520px] w-[720px] rounded-full bg-[#7C3AED]/20 blur-[140px]"
                ></div>
                <div
                    class="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#D7FF3E]/10 blur-[110px]"
                ></div>

                <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
                    <p
                        class="hidden text-[10px] font-bold tracking-[0.4em] text-white/25 lg:absolute lg:-left-14 lg:top-24 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
                    >
                        KREA CHALLENGE — EDISI 2026
                    </p>

                    <div class="flex flex-wrap items-center gap-3">
                        <span
                            class="inline-flex items-center gap-2 rounded-full border border-[#D7FF3E]/30 bg-[#D7FF3E]/10 px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-[#D7FF3E]"
                        >
                            <Sparkles class="h-3.5 w-3.5" /> RUANG UNTUK IDE BERANI
                        </span>
                        <span class="text-[11px] font-bold tracking-[0.2em] text-white/35"
                            >/ EDISI 07 — 2026</span
                        >
                    </div>

                    <h1
                        class="mt-8 text-[clamp(2.8rem,10.5vw,9.5rem)] font-bold leading-[0.84] tracking-[-0.07em]"
                    >
                        IDE<br />
                        <span class="text-[#D7FF3E]">BERANI,</span><br />
                        KARYA <span class="krea-outline">NYATA.</span>
                    </h1>

                    <div class="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
                        <div class="max-w-md">
                            <p class="text-base leading-8 text-white/60 sm:text-lg sm:leading-9">
                                Challenge kreatif bulanan untuk kamu yang punya ide dan berani
                                mewujudkannya. Kirim karyamu, dapat feedback jujur, dan menangkan
                                hadiah yang sepadan.
                            </p>

                            <div class="mt-8 flex flex-wrap items-center gap-3">
                                <Link
                                    :href="register()"
                                    class="group inline-flex items-center gap-3 rounded-full bg-[#D7FF3E] px-7 py-4 text-sm font-bold text-[#08080C] transition hover:bg-white"
                                >
                                    Mulai berkarya
                                    <ArrowRight class="h-4 w-4 transition group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#challenges"
                                    class="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-sm font-semibold text-white/75 transition hover:border-[#D7FF3E] hover:text-[#D7FF3E]"
                                >
                                    <Play class="h-3.5 w-3.5 fill-current" /> Lihat brief
                                </a>
                            </div>

                            <div class="mt-9 flex items-center gap-4">
                                <div class="flex -space-x-2.5">
                                    <span
                                        v-for="(person, index) in [
                                            { initials: 'AN', color: 'bg-violet-500' },
                                            { initials: 'RA', color: 'bg-amber-500' },
                                            { initials: 'DP', color: 'bg-cyan-500' },
                                            { initials: 'KS', color: 'bg-rose-500' },
                                        ]"
                                        :key="index"
                                        class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#08080C] text-[10px] font-bold text-white"
                                        :class="person.color"
                                        >{{ person.initials }}</span
                                    >
                                </div>
                                <p class="text-xs leading-5 text-white/45">
                                    <span class="font-bold text-white">12.400+ kreator</span><br />sudah
                                    bergabung
                                </p>
                            </div>
                        </div>

                        <!-- Editorial challenge tile -->
                        <div class="relative">
                            <div
                                class="absolute inset-x-8 -top-5 h-full rotate-[5deg] rounded-[32px] border border-white/10 bg-white/[0.025]"
                            ></div>

                            <div
                                class="relative rotate-[-2deg] rounded-[32px] border border-white/15 bg-[#111119] p-3 shadow-[0_45px_100px_-35px_rgba(0,0,0,0.95)]"
                            >
                                <div class="rounded-[24px] border border-white/10 bg-[#0B0B11] p-5 sm:p-6">
                                    <div class="flex items-center justify-between">
                                        <span
                                            class="text-[10px] font-bold tracking-[0.2em] text-white/40"
                                            >TANTANGAN AKTIF · #07</span
                                        >
                                        <span
                                            class="inline-flex items-center gap-1.5 rounded-full bg-[#D7FF3E] px-3 py-1 text-[10px] font-bold text-[#08080C]"
                                        >
                                            <Zap class="h-3 w-3 fill-current" /> LIVE
                                        </span>
                                    </div>

                                    <div
                                        class="relative mt-5 h-52 overflow-hidden rounded-2xl sm:h-60"
                                        style="
                                            background: linear-gradient(
                                                120deg,
                                                #6d28d9 0%,
                                                #c026d3 50%,
                                                #f43f5e 100%
                                            );
                                        "
                                    >
                                        <div
                                            class="absolute -right-10 -top-16 h-56 w-56 rounded-full border-[26px] border-white/15"
                                        ></div>
                                        <div
                                            class="absolute -bottom-20 -left-12 h-48 w-48 rotate-45 rounded-3xl bg-black/20"
                                        ></div>
                                        <div class="absolute inset-0 flex flex-col justify-between p-5">
                                            <div class="flex items-start justify-between">
                                                <span
                                                    class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur"
                                                >
                                                    <Palette class="h-5 w-5" />
                                                </span>
                                                <span
                                                    class="text-6xl font-bold leading-none tracking-tighter text-white/20"
                                                    >07</span
                                                >
                                            </div>
                                            <div>
                                                <p
                                                    class="text-[10px] font-bold tracking-[0.2em] text-white/65"
                                                >
                                                    TEMA · VISUAL STORYTELLING
                                                </p>
                                                <p class="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                                                    Poster untuk Perubahan
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-5 flex items-center justify-between gap-4">
                                        <div class="flex items-center gap-6">
                                            <div>
                                                <p class="text-[10px] tracking-wider text-white/35">HADIAH</p>
                                                <p class="text-sm font-bold text-[#D7FF3E]">Rp 25 jt</p>
                                            </div>
                                            <div>
                                                <p class="text-[10px] tracking-wider text-white/35">KARYA</p>
                                                <p class="text-sm font-bold">1.284</p>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-[10px] tracking-wider text-white/35">BERAKHIR</p>
                                            <p class="text-sm font-bold">{{ countdown.days }} hari</p>
                                        </div>
                                    </div>

                                    <div
                                        class="mt-5 flex items-center justify-between border-t border-white/10 pt-4"
                                    >
                                        <p class="text-[10px] font-bold tracking-[0.18em] text-white/40">
                                            WAKTU TERSISA
                                        </p>
                                        <div class="flex gap-2 text-center">
                                            <span
                                                v-for="item in countdownItems"
                                                :key="item.label"
                                                class="min-w-10 rounded-lg bg-white/[0.06] px-2 py-1.5"
                                            >
                                                <span class="block text-sm font-bold leading-none">{{
                                                    item.value
                                                }}</span>
                                                <span
                                                    class="mt-1 block text-[7px] tracking-widest text-white/35"
                                                    >{{ item.label }}</span
                                                >
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Statement strip -->
            <div class="border-y border-white/10 bg-white/[0.02]">
                <div
                    class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-3 px-5 py-5 sm:px-8"
                >
                    <p class="text-xs font-bold tracking-[0.18em] text-white/70 sm:text-sm">
                        SATU BRIEF · RIBUAN INTERPRETASI
                    </p>
                    <div class="flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-semibold text-white/35">
                        <span>48 CHALLENGE SELESAI</span>
                        <span>250 JT+ HADIAH</span>
                        <span class="text-[#D7FF3E]">96% PESERTA PUAS</span>
                    </div>
                </div>
            </div>

            <!-- Challenges carousel -->
            <section id="challenges" class="py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-5 sm:px-8">
                    <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div class="flex items-start gap-5">
                            <span class="mt-2 text-xs font-bold tracking-[0.2em] text-[#D7FF3E]">01</span>
                            <div>
                                <p class="text-[11px] font-bold tracking-[0.2em] text-white/35">
                                    TANTANGAN AKTIF
                                </p>
                                <h2
                                    class="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl"
                                >
                                    Pilih satu,<br />lalu buktikan.
                                </h2>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button
                                type="button"
                                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#D7FF3E] hover:text-[#D7FF3E]"
                                aria-label="Tantangan sebelumnya"
                                @click="scrollTrack(-1)"
                            >
                                <ArrowLeft class="h-4 w-4" />
                            </button>
                            <button
                                type="button"
                                class="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-[#D7FF3E] hover:text-[#D7FF3E]"
                                aria-label="Tantangan berikutnya"
                                @click="scrollTrack(1)"
                            >
                                <ArrowRight class="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    <div class="krea-scroll mt-12 flex gap-7 overflow-x-auto border-b border-white/10">
                        <button
                            v-for="category in categories"
                            :key="category.name"
                            type="button"
                            class="shrink-0 border-b-2 pb-4 text-sm font-semibold transition"
                            :class="
                                activeCategory === category.name
                                    ? 'border-[#D7FF3E] text-[#D7FF3E]'
                                    : 'border-transparent text-white/40 hover:text-white'
                            "
                            @click="selectCategory(category.name)"
                        >
                            {{ category.name }}
                        </button>
                    </div>

                    <div
                        ref="track"
                        class="krea-scroll mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
                    >
                        <article
                            v-for="challenge in filteredChallenges"
                            :key="challenge.title"
                            class="group relative flex w-[82vw] max-w-[460px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#101017] p-7 transition hover:border-white/25"
                        >
                            <span
                                class="pointer-events-none absolute right-4 top-0 text-[130px] font-bold leading-none tracking-tighter text-white/[0.035]"
                                >{{ challenge.mark }}</span
                            >
                            <div class="h-1.5 w-14 rounded-full" :style="{ background: challenge.bg }"></div>

                            <div class="relative mt-9 flex items-center justify-between">
                                <span
                                    class="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] text-white/55"
                                    >{{ challenge.category.toUpperCase() }}</span
                                >
                                <span class="text-[#D7FF3E]">
                                    <component :is="iconMap[challenge.icon]" class="h-5 w-5" />
                                </span>
                            </div>

                            <h3 class="relative mt-6 text-2xl font-bold tracking-tight">
                                {{ challenge.title }}
                            </h3>
                            <p class="relative mt-3 min-h-12 text-sm leading-6 text-white/50">
                                {{ challenge.description }}
                            </p>

                            <div
                                class="relative mt-8 grid grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5"
                            >
                                <div class="pr-3">
                                    <p class="text-[10px] uppercase tracking-wider text-white/35">Hadiah</p>
                                    <p class="mt-1 text-sm font-bold text-[#D7FF3E]">
                                        {{ challenge.prize }}
                                    </p>
                                </div>
                                <div class="px-3">
                                    <p class="text-[10px] uppercase tracking-wider text-white/35">Karya</p>
                                    <p class="mt-1 text-sm font-bold">{{ challenge.entries }}</p>
                                </div>
                                <div class="pl-3">
                                    <p class="text-[10px] uppercase tracking-wider text-white/35">Sisa</p>
                                    <p class="mt-1 text-sm font-bold">{{ challenge.days }}</p>
                                </div>
                            </div>

                            <Link
                                :href="register()"
                                class="relative mt-6 inline-flex items-center gap-2 self-start text-sm font-bold text-white/80 transition group-hover:text-[#D7FF3E]"
                            >
                                Ikut tantangan ini <ArrowUpRight class="h-4 w-4" />
                            </Link>
                        </article>
                    </div>

                    <p v-if="!filteredChallenges.length" class="mt-8 text-white/50">
                        Belum ada tantangan di kategori ini.
                    </p>
                </div>
            </section>

            <!-- Timeline -->
            <section id="cara-kerja" class="border-t border-white/10 py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-5 sm:px-8">
                    <div class="flex items-start gap-5">
                        <span class="mt-2 text-xs font-bold tracking-[0.2em] text-[#D7FF3E]">02</span>
                        <div>
                            <p class="text-[11px] font-bold tracking-[0.2em] text-white/35">CARA KERJA</p>
                            <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                                Tiga langkah,<br />tanpa drama.
                            </h2>
                        </div>
                    </div>

                    <div class="mt-14 border-t border-white/10">
                        <div
                            v-for="step in steps"
                            :key="step.number"
                            class="group grid gap-5 border-b border-white/10 py-8 lg:grid-cols-[150px_1fr_56px] lg:items-center lg:gap-10"
                        >
                            <span class="krea-outline text-6xl font-bold leading-none sm:text-7xl">{{
                                step.number
                            }}</span>
                            <div>
                                <h3 class="text-2xl font-bold tracking-tight">{{ step.title }}</h3>
                                <p class="mt-3 max-w-2xl text-sm leading-7 text-white/50">
                                    {{ step.description }}
                                </p>
                            </div>
                            <span
                                class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#D7FF3E] transition group-hover:border-[#D7FF3E]"
                            >
                                <component :is="iconMap[step.icon]" class="h-5 w-5" />
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Category index -->
            <section id="kategori" class="py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-5 sm:px-8">
                    <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div class="flex items-start gap-5">
                            <span class="mt-2 text-xs font-bold tracking-[0.2em] text-[#D7FF3E]">03</span>
                            <div>
                                <p class="text-[11px] font-bold tracking-[0.2em] text-white/35">KATEGORI</p>
                                <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                                    Temukan medium-mu.
                                </h2>
                            </div>
                        </div>
                        <p class="max-w-sm text-sm leading-7 text-white/45">
                            Enam cara bercerita. Pilih satu yang paling kamu suka, atau coba semuanya.
                        </p>
                    </div>

                    <div class="mt-14 border-t border-white/10">
                        <a
                            v-for="(category, index) in categories.filter((item) => item.name !== 'Semua')"
                            :key="category.name"
                            href="#challenges"
                            class="group grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-white/10 py-5 transition hover:bg-[#D7FF3E] sm:grid-cols-[70px_1fr_auto] sm:gap-8 sm:px-5"
                        >
                            <span
                                class="text-xs font-bold text-white/25 transition group-hover:text-black/50"
                                >0{{ index + 1 }}</span
                            >
                            <span class="flex items-center gap-4">
                                <component
                                    :is="iconMap[category.icon]"
                                    class="h-5 w-5 text-white/25 transition group-hover:text-black/50 sm:h-6 sm:w-6"
                                />
                                <span
                                    class="text-2xl font-bold tracking-tight transition group-hover:text-[#08080C] sm:text-4xl"
                                    >{{ category.name }}</span
                                >
                            </span>
                            <ArrowUpRight
                                class="h-5 w-5 text-white/30 transition group-hover:text-[#08080C] sm:h-7 sm:w-7"
                            />
                        </a>
                    </div>
                </div>
            </section>

            <!-- Prize leaderboard -->
            <section id="hadiah" class="border-y border-white/10 bg-[#0C0C12] py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-5 sm:px-8">
                    <div class="flex items-start gap-5">
                        <span class="mt-2 text-xs font-bold tracking-[0.2em] text-[#D7FF3E]">04</span>
                        <div>
                            <p class="text-[11px] font-bold tracking-[0.2em] text-white/35">HADIAH</p>
                            <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                                Peringkatnya jelas.
                            </h2>
                        </div>
                    </div>

                    <div class="mt-14 space-y-3">
                        <div
                            v-for="(prize, index) in prizes"
                            :key="prize.place"
                            class="grid gap-4 rounded-2xl border px-6 py-7 sm:grid-cols-[90px_1fr_auto] sm:items-center"
                            :class="
                                prize.highlight
                                    ? 'border-[#D7FF3E] bg-[#D7FF3E] text-[#08080C]'
                                    : 'border-white/10 bg-[#101017]'
                            "
                        >
                            <span
                                class="text-5xl font-bold leading-none tracking-tighter"
                                :class="prize.highlight ? 'text-black/25' : 'text-white/15'"
                                >0{{ index + 1 }}</span
                            >
                            <div>
                                <p
                                    class="text-[11px] font-bold tracking-[0.18em]"
                                    :class="prize.highlight ? 'text-black/60' : 'text-white/40'"
                                >
                                    {{ prize.place.toUpperCase() }}
                                </p>
                                <p class="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                                    {{ prize.amount }}
                                </p>
                                <p
                                    class="mt-2 text-xs"
                                    :class="prize.highlight ? 'text-black/60' : 'text-white/40'"
                                >
                                    {{ prize.detail }}
                                </p>
                            </div>
                            <component
                                :is="iconMap[prize.icon]"
                                class="h-9 w-9"
                                :class="prize.highlight ? 'text-[#08080C]' : 'text-[#D7FF3E]'"
                            />
                        </div>
                    </div>

                    <div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/45">
                        <span class="inline-flex items-center gap-2">
                            <CheckCircle2 class="h-4 w-4 text-[#D7FF3E]" /> 10 finalis dapat feature
                        </span>
                        <span class="inline-flex items-center gap-2">
                            <Gift class="h-4 w-4 text-[#D7FF3E]" /> Merchandise eksklusif
                        </span>
                        <span class="inline-flex items-center gap-2">
                            <Heart class="h-4 w-4 text-[#D7FF3E]" /> Sertifikat partisipasi
                        </span>
                    </div>
                </div>
            </section>

            <!-- Testimonial collage -->
            <section class="py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-5 sm:px-8">
                    <div class="flex items-start gap-5">
                        <span class="mt-2 text-xs font-bold tracking-[0.2em] text-[#D7FF3E]">05</span>
                        <div>
                            <p class="text-[11px] font-bold tracking-[0.2em] text-white/35">KOMUNITAS</p>
                            <h2 class="mt-3 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                                Kata mereka.
                            </h2>
                        </div>
                    </div>

                    <div class="mt-14 grid gap-5 lg:grid-cols-3">
                        <figure
                            v-for="testimonial in testimonials"
                            :key="testimonial.name"
                            class="flex flex-col rounded-[28px] border border-white/10 bg-[#101017] p-7"
                            :class="
                                testimonial.featured
                                    ? 'lg:col-span-2 lg:p-10'
                                    : 'lg:mt-14'
                            "
                        >
                            <Quote
                                class="h-9 w-9 text-[#D7FF3E]"
                                :class="testimonial.featured ? 'lg:h-12 lg:w-12' : ''"
                            />
                            <blockquote
                                class="mt-6 flex-1 font-semibold leading-8 text-white/75"
                                :class="testimonial.featured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-sm'"
                            >
                                “{{ testimonial.quote }}”
                            </blockquote>
                            <figcaption class="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                                <span
                                    class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white"
                                    :class="testimonial.color"
                                    >{{ testimonial.initials }}</span
                                >
                                <span>
                                    <span class="block text-sm font-bold">{{ testimonial.name }}</span>
                                    <span class="mt-0.5 block text-xs text-white/40">{{
                                        testimonial.role
                                    }}</span>
                                </span>
                                <span class="ml-auto flex gap-0.5 text-[#D7FF3E]">
                                    <Star v-for="star in 5" :key="star" class="h-3 w-3 fill-current" />
                                </span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <!-- FAQ editorial list -->
            <section id="faq" class="border-t border-white/10 py-24 sm:py-32">
                <div class="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[300px_1fr]">
                    <div class="lg:sticky lg:top-28 lg:self-start">
                        <div class="flex items-start gap-5">
                            <span class="mt-2 text-xs font-bold tracking-[0.2em] text-[#D7FF3E]">06</span>
                            <div>
                                <p class="text-[11px] font-bold tracking-[0.2em] text-white/35">FAQ</p>
                                <h2 class="mt-3 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
                                    Yang sering ditanya.
                                </h2>
                            </div>
                        </div>
                        <p class="mt-6 max-w-xs text-sm leading-7 text-white/45">
                            Masih bingung? Tulis pertanyaanmu ke komunitas, kami siap bantu.
                        </p>
                    </div>

                    <div class="border-t border-white/10">
                        <div v-for="(faq, index) in faqs" :key="faq.question" class="border-b border-white/10">
                            <button
                                type="button"
                                class="flex w-full items-center gap-5 py-6 text-left"
                                :aria-expanded="openFaq === index"
                                @click="openFaq = openFaq === index ? null : index"
                            >
                                <span class="text-xs font-bold text-[#D7FF3E]">0{{ index + 1 }}</span>
                                <span class="flex-1 text-base font-semibold sm:text-lg">{{
                                    faq.question
                                }}</span>
                                <Plus v-if="openFaq !== index" class="h-5 w-5 shrink-0 text-white/45" />
                                <X v-else class="h-5 w-5 shrink-0 text-[#D7FF3E]" />
                            </button>
                            <p
                                v-if="openFaq === index"
                                class="pb-6 pl-9 pr-4 text-sm leading-7 text-white/50"
                            >
                                {{ faq.answer }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Full bleed CTA -->
            <section class="bg-[#D7FF3E] py-20 text-[#08080C] sm:py-28">
                <div
                    class="mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div>
                        <p class="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em]">
                            <CalendarDays class="h-4 w-4" /> PENDAFTARAN DIBUKA
                        </p>
                        <h2
                            class="mt-6 text-5xl font-bold leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-8xl"
                        >
                            MASIH<br />MEMIKIRKAN?
                        </h2>
                        <p class="mt-7 max-w-lg text-base leading-7 text-black/65">
                            Ide terbaik biasanya muncul saat kamu mulai mencoba. Gabung gratis dan
                            kirim karya pertamamu hari ini.
                        </p>
                    </div>
                    <Link
                        :href="register()"
                        class="group flex h-24 w-24 shrink-0 items-center justify-center self-start rounded-full bg-[#08080C] text-[#D7FF3E] transition hover:scale-105 lg:self-end"
                        aria-label="Gabung KreaChallenge"
                    >
                        <ArrowUpRight
                            class="h-9 w-9 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </Link>
                </div>
            </section>
        </main>

        <!-- Footer with oversized wordmark -->
        <footer class="bg-[#08080C] pt-16">
            <div class="mx-auto max-w-7xl px-5 sm:px-8">
                <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div>
                        <a href="#top" class="flex items-center gap-2.5">
                            <svg viewBox="0 0 40 40" class="h-8 w-8" aria-hidden="true">
                                <rect width="40" height="40" rx="12" fill="#D7FF3E" />
                                <path
                                    d="M20 9.5v21M9.5 20h21M12.6 12.6l14.8 14.8M27.4 12.6L12.6 27.4"
                                    stroke="#08080C"
                                    stroke-width="3.2"
                                    stroke-linecap="round"
                                />
                            </svg>
                            <span class="text-lg font-bold tracking-tight"
                                >Krea<span class="text-[#D7FF3E]">Challenge</span></span
                            >
                        </a>
                        <p class="mt-4 max-w-xs text-sm leading-6 text-white/40">
                            Ruang bagi ide-ide berani untuk tumbuh, berkolaborasi, dan diapresiasi.
                        </p>
                        <div class="mt-6 flex gap-2">
                            <a
                                v-for="social in [
                                    { icon: Globe, label: 'Website' },
                                    { icon: Share2, label: 'Bagikan' },
                                    { icon: Send, label: 'Kirim' },
                                    { icon: Rss, label: 'Update' },
                                    { icon: AtSign, label: 'Kontak' },
                                ]"
                                :key="social.label"
                                href="#top"
                                :aria-label="social.label"
                                class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition hover:border-[#D7FF3E] hover:text-[#D7FF3E]"
                            >
                                <component :is="social.icon" class="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    <div
                        v-for="column in [
                            { title: 'Platform', links: ['Tantangan', 'Kategori', 'Papan peringkat', 'Blog'] },
                            { title: 'Komunitas', links: ['Tentang kami', 'Jadi juri', 'Mitra', 'Kontak'] },
                            {
                                title: 'Bantuan',
                                links: ['FAQ', 'Panduan', 'Syarat & ketentuan', 'Kebijakan privasi'],
                            },
                        ]"
                        :key="column.title"
                    >
                        <h3 class="text-sm font-bold">{{ column.title }}</h3>
                        <ul class="mt-5 space-y-3">
                            <li v-for="link in column.links" :key="link">
                                <a
                                    href="#top"
                                    class="text-sm text-white/40 transition hover:text-[#D7FF3E]"
                                    >{{ link }}</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    class="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p>© 2026 KreaChallenge. Dibuat untuk para kreator.</p>
                    <p>Dibuat dengan ❤️ di Indonesia</p>
                </div>
            </div>

            <div class="mt-10 overflow-hidden px-5 sm:px-8">
                <p
                    class="krea-outline-soft select-none text-center text-[24vw] font-bold leading-[0.72] tracking-[-0.09em]"
                >
                    KREA
                </p>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.krea-grid {
    background-image:
        linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: linear-gradient(to bottom, black, transparent 85%);
}

.krea-outline {
    color: transparent;
    -webkit-text-stroke: 1.6px #d7ff3e;
}

.krea-outline-soft {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.16);
}

.krea-scroll {
    scrollbar-width: none;
}

.krea-scroll::-webkit-scrollbar {
    display: none;
}

.krea-marquee {
    animation: krea-marquee 32s linear infinite;
}

@keyframes krea-marquee {
    to {
        transform: translateX(-50%);
    }
}

@media (prefers-reduced-motion: reduce) {
    .krea-marquee {
        animation: none;
    }
}
</style>
