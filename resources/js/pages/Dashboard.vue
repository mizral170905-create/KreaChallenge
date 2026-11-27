<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3';
import { ArrowUpRight, Check } from '@lucide/vue';
import { computed } from 'vue';
import {
    activities,
    challengeProgress,
    challenges,
    dashboardStats,
    iconMap,
    leaderboard,
    steps,
} from '@/data/krea';
import { dashboard } from '@/routes';

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Dashboard',
                href: dashboard(),
            },
        ],
    },
});

const page = usePage();
const user = computed(() => page.props.auth.user);
const firstName = computed(() => user.value.name.split(' ')[0] || 'Kreator');

const toneClasses: Record<string, string> = {
    lime: 'bg-[#D7FF3E]/20 text-[#5D7500] dark:text-[#D7FF3E]',
    violet: 'bg-violet-500/15 text-violet-600 dark:text-violet-300',
    cyan: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300',
    rose: 'bg-rose-500/15 text-rose-600 dark:text-rose-300',
};

const stepStatus = ['done', 'current', 'todo'];
const featuredChallenges = challenges.slice(0, 3);
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex min-h-full flex-1 flex-col bg-background">
        <div class="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
            <!-- Branded greeting -->
            <section
                class="relative overflow-hidden rounded-3xl bg-[#0B0B11] p-6 text-white shadow-[0_24px_60px_-35px_rgba(0,0,0,0.9)] sm:p-9"
            >
                <div
                    class="krea-dash-grid pointer-events-none absolute inset-0 opacity-40"
                ></div>
                <div
                    class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#7C3AED]/25 blur-3xl"
                ></div>
                <div
                    class="pointer-events-none absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[#D7FF3E]/10 blur-3xl"
                ></div>

                <div
                    class="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div class="max-w-2xl">
                        <span
                            class="inline-flex items-center gap-2 rounded-full border border-[#D7FF3E]/30 bg-[#D7FF3E]/10 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.18em] text-[#D7FF3E]"
                        >
                            EDISI 07 · RUANG UNTUK IDE BERANI
                        </span>
                        <h1
                            class="mt-5 text-3xl leading-tight font-bold tracking-[-0.04em] sm:text-5xl"
                        >
                            Halo,
                            <span class="text-[#D7FF3E]">{{ firstName }}</span>
                            👋
                        </h1>
                        <p
                            class="mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base"
                        >
                            Ide kamu punya tempat di sini. Cek tantangan yang
                            lagi berjalan, lanjutkan progres, dan kirim karya
                            terbaikmu sebelum waktu habis.
                        </p>
                    </div>

                    <a
                        href="/#challenges"
                        class="group inline-flex items-center gap-3 self-start rounded-full bg-[#D7FF3E] px-6 py-3.5 text-sm font-bold text-[#08080C] transition hover:bg-white"
                    >
                        Lihat tantangan aktif
                        <ArrowUpRight
                            class="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </section>

            <!-- Stats -->
            <section class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article
                    v-for="stat in dashboardStats"
                    :key="stat.label"
                    class="relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                    <div class="flex items-start justify-between">
                        <span
                            class="flex h-10 w-10 items-center justify-center rounded-xl"
                            :class="toneClasses[stat.tone]"
                        >
                            <component
                                :is="iconMap[stat.icon]"
                                class="h-5 w-5"
                            />
                        </span>
                        <span
                            class="text-[9px] font-bold tracking-[0.2em] text-muted-foreground/70"
                            >STAT</span
                        >
                    </div>
                    <p class="mt-6 text-2xl font-bold tracking-tight">
                        {{ stat.value }}
                    </p>
                    <p class="mt-1 text-sm font-semibold">{{ stat.label }}</p>
                    <p class="mt-2 text-xs text-muted-foreground">
                        {{ stat.hint }}
                    </p>
                </article>
            </section>

            <!-- Challenges + progress -->
            <section class="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
                <article
                    class="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <p
                                class="text-[10px] font-bold tracking-[0.2em] text-muted-foreground"
                            >
                                TANTANGAN AKTIF
                            </p>
                            <h2
                                class="mt-2 text-xl font-bold tracking-tight sm:text-2xl"
                            >
                                Lagi ramai dikerjain
                            </h2>
                        </div>
                        <a
                            href="/#challenges"
                            class="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#5D7500] transition hover:gap-2.5 dark:text-[#D7FF3E]"
                        >
                            Semua
                            <ArrowUpRight class="h-3.5 w-3.5" />
                        </a>
                    </div>

                    <div class="mt-6 divide-y divide-border">
                        <div
                            v-for="(challenge, index) in featuredChallenges"
                            :key="challenge.title"
                            class="py-5 first:pt-0 last:pb-0"
                        >
                            <div class="flex items-center gap-4">
                                <span
                                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                                    :style="{ background: challenge.bg }"
                                >
                                    <component
                                        :is="iconMap[challenge.icon]"
                                        class="h-5 w-5"
                                    />
                                </span>
                                <div class="min-w-0">
                                    <p
                                        class="truncate text-sm font-bold sm:text-base"
                                    >
                                        {{ challenge.title }}
                                    </p>
                                    <p
                                        class="mt-1 text-xs text-muted-foreground"
                                    >
                                        {{ challenge.category }} ·
                                        {{ challenge.entries }} karya
                                    </p>
                                </div>
                                <div class="ml-auto shrink-0 text-right">
                                    <p
                                        class="text-sm font-bold text-[#5D7500] dark:text-[#D7FF3E]"
                                    >
                                        {{ challenge.prize }}
                                    </p>
                                    <p
                                        class="mt-1 text-xs text-muted-foreground"
                                    >
                                        {{ challenge.days }}
                                    </p>
                                </div>
                            </div>
                            <div
                                class="mt-4 h-1.5 overflow-hidden rounded-full bg-muted"
                            >
                                <div
                                    class="h-full rounded-full"
                                    :style="{
                                        width: challengeProgress[index] + '%',
                                        background: challenge.bg,
                                    }"
                                ></div>
                            </div>
                        </div>
                    </div>
                </article>

                <aside
                    class="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                    <p
                        class="text-[10px] font-bold tracking-[0.2em] text-muted-foreground"
                    >
                        PROGRES KAMU
                    </p>
                    <h2
                        class="mt-2 text-xl font-bold tracking-tight sm:text-2xl"
                    >
                        Satu langkah lagi
                    </h2>
                    <p class="mt-2 text-sm text-muted-foreground">
                        Lengkapi perjalanan challenge #07.
                    </p>

                    <div class="mt-6 space-y-5">
                        <div
                            v-for="(step, index) in steps"
                            :key="step.number"
                            class="flex gap-3"
                        >
                            <span
                                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                                :class="
                                    stepStatus[index] === 'done'
                                        ? 'border-[#D7FF3E] bg-[#D7FF3E] text-[#08080C]'
                                        : stepStatus[index] === 'current'
                                          ? 'border-[#D7FF3E] text-[#5D7500] dark:text-[#D7FF3E]'
                                          : 'border-border text-muted-foreground'
                                "
                            >
                                <Check
                                    v-if="stepStatus[index] === 'done'"
                                    class="h-4 w-4"
                                />
                                <template v-else>{{ index + 1 }}</template>
                            </span>
                            <div class="pt-1">
                                <p class="text-sm font-semibold">
                                    {{ step.title }}
                                </p>
                                <p
                                    class="mt-1 text-xs leading-5 text-muted-foreground"
                                >
                                    {{ step.description }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6 rounded-xl bg-muted p-4">
                        <div
                            class="flex items-center justify-between text-xs font-semibold"
                        >
                            <span>Kelengkapan profil</span>
                            <span class="text-[#5D7500] dark:text-[#D7FF3E]"
                                >80%</span
                            >
                        </div>
                        <div
                            class="mt-3 h-1.5 overflow-hidden rounded-full bg-background"
                        >
                            <div
                                class="h-full w-4/5 rounded-full bg-[#D7FF3E]"
                            ></div>
                        </div>
                    </div>
                </aside>
            </section>

            <!-- Leaderboard + activity -->
            <section class="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <article
                    class="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <p
                                class="text-[10px] font-bold tracking-[0.2em] text-muted-foreground"
                            >
                                KOMUNITAS
                            </p>
                            <h2
                                class="mt-2 text-xl font-bold tracking-tight sm:text-2xl"
                            >
                                Papan peringkat
                            </h2>
                        </div>
                        <a
                            href="/#hadiah"
                            class="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#5D7500] transition hover:gap-2.5 dark:text-[#D7FF3E]"
                        >
                            Hadiah
                            <ArrowUpRight class="h-3.5 w-3.5" />
                        </a>
                    </div>

                    <div class="mt-6 space-y-3">
                        <div
                            v-for="person in leaderboard"
                            :key="person.rank"
                            class="flex items-center gap-3 rounded-xl border border-border/70 p-3"
                        >
                            <span
                                class="w-5 text-center text-sm font-bold text-muted-foreground"
                                >0{{ person.rank }}</span
                            >
                            <span
                                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white"
                                :class="person.color"
                                >{{ person.initials }}</span
                            >
                            <div class="min-w-0">
                                <p class="truncate text-sm font-bold">
                                    {{ person.name }}
                                </p>
                                <p class="text-xs text-muted-foreground">
                                    {{ person.role }}
                                </p>
                            </div>
                            <p class="ml-auto shrink-0 text-sm font-bold">
                                {{ person.points }}
                            </p>
                        </div>
                    </div>
                </article>

                <article
                    class="rounded-2xl border border-border bg-card p-5 sm:p-6"
                >
                    <p
                        class="text-[10px] font-bold tracking-[0.2em] text-muted-foreground"
                    >
                        TERBARU
                    </p>
                    <h2
                        class="mt-2 text-xl font-bold tracking-tight sm:text-2xl"
                    >
                        Aktivitas kamu
                    </h2>

                    <div class="mt-6 space-y-5">
                        <div
                            v-for="item in activities"
                            :key="item.title"
                            class="flex gap-3"
                        >
                            <span
                                class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                                :class="toneClasses[item.tone]"
                            >
                                <component
                                    :is="iconMap[item.icon]"
                                    class="h-4 w-4"
                                />
                            </span>
                            <div>
                                <p class="text-sm font-semibold">
                                    {{ item.title }}
                                </p>
                                <p class="mt-1 text-xs text-muted-foreground">
                                    {{ item.detail }}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <!-- Closing CTA -->
            <section
                class="relative overflow-hidden rounded-3xl bg-[#D7FF3E] p-6 text-[#08080C] sm:p-8"
            >
                <div
                    class="pointer-events-none absolute -top-16 -right-10 h-52 w-52 rounded-full border-[22px] border-black/5"
                ></div>
                <div
                    class="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div>
                        <p
                            class="text-[10px] font-bold tracking-[0.2em] text-black/50"
                        >
                            SIAP KIRIM KARYAMU?
                        </p>
                        <h2
                            class="mt-3 max-w-xl text-2xl leading-tight font-bold tracking-tight sm:text-3xl"
                        >
                            Ide terbaik bukan yang sempurna, tapi yang berani
                            dikirim.
                        </h2>
                    </div>
                    <a
                        href="/#challenges"
                        class="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-[#08080C] px-6 py-3.5 text-sm font-bold text-[#D7FF3E] transition hover:scale-[1.02] sm:self-auto"
                    >
                        Mulai berkarya
                        <ArrowUpRight
                            class="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.krea-dash-grid {
    background-image:
        linear-gradient(
            to right,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
        ),
        linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
        );
    background-size: 40px 40px;
    mask-image: linear-gradient(to bottom, black, transparent 90%);
}
</style>
