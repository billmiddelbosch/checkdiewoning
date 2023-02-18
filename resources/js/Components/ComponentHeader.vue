<template>
    <header :class="{ 'header-bg': background }">
        <div class="logo">
            <router-link :to="{ name: 'Homepage' }">
                <svg v-if=showBranding :class="{ 'logo-white': logoWhite }" viewBox="0 0 1844 495" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <filter id="dropshadow" height="150%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="16" />
                        <feOffset dx="5" dy="5" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <title>Slice</title>
                    <g id="Page-1" stroke="none" stroke-width="1">
                        <g id="i-salu" transform="translate(48.000000, 41.000000)">
                            <polygon id="Shape" points="149.71 227.92 149.71 280.64 0 280.64 0 227.92"
                                style="filter:url(#dropshadow)" />
                            <path id="Shape" d="M323.47,138.37 L323.47,404.78 L213.88,404.78 L213.88,138.37 C245.66,164.704761
                                        291.68,164.704761 323.46,138.37 L323.47,138.37 Z M331.19,63.95 C331.19,100.21
                                        305.87,126.22 268.92,126.22 C231.97,126.22 206.65,100.22 206.65,63.95
                                        C206.65,27 231.97,0.95 268.92,0.95 C305.87,0.95 331.19,27 331.19,63.95 Z"
                                style="filter:url(#dropshadow)" />
                            <polygon id="Shape" points="537.54 227.92 537.54 280.64 387.83 280.64 387.83 227.92"
                                style="filter:url(#dropshadow)" />
                            <path id="Shape" d="M855.54,99.16 C819.01,99.16 795.07,113.77 795.07,138.16 C795.07,212.03
                                        954.98,173.47 954.57,276.56 C954.57,323.64 912.77,354.08 851.89,354.08
                                        C810.49,354.08 769.89,336.22 743.12,310.65 L757.73,282.65 C784.11,307.81
                                        820.23,322.42 852.3,322.42 C893.3,322.42 918.86,305.78 918.86,278.18
                                        C919.27,202.28 759.36,242.46 759.36,140.59 C759.36,95.95 798.73,67.53
                                        857.58,67.53 C890.45,67.53 924.14,78.08 947.68,93.91 L933.88,122.73
                                        C908.27,106.06 878.27,99.16 855.54,99.16 Z" style="filter:url(#dropshadow)" />
                            <path id="Shape" d="M1197.27,280.18 L1042.64,280.18 L1010.98,352.83 L976.48,352.83 L1103.92,68.73
                                        L1137.61,68.73 L1264.61,352.83 L1229.3,352.83 L1197.27,280.18 Z
                                        M1184.27,250.18 L1119.74,104.07 L1056.02,250.18 L1184.27,250.18 Z"
                                style="filter:url(#dropshadow)" />
                            <polygon id="Shape" points="1341.76 68.72 1341.76 322.79 1466.36 322.79 1466.36
                                            352.79 1309.27 352.79 1309.27 68.72" style="filter:url(#dropshadow)" />
                            <path id="Shape" d="M1632.35,324.42 C1686.35,324.42 1718.8,291.95 1718.8,235.94 L1718.8,68.72
                                        L1751.27,68.72 L1751.27,235.94 C1751.27,310.21 1706.63,354.05 1632.35,354.05
                                        C1557.67,354.05 1512.62,310.22 1512.62,235.94 L1512.62,68.72 L1545.09,68.72
                                        L1545.09,235.94 C1545.09,291.95 1578.37,324.42 1632.35,324.42 Z"
                                style="filter:url(#dropshadow)" />
                        </g>
                    </g>
                </svg>
            </router-link>
        </div>
        <Navigation v-if=showNav :showBranding=showBranding />
    </header>
</template>
<script>
import Navigation from "@/components/ComponentNavigation";

export default {
    name: "Header",
    components: {
        Navigation
    },
    props: {
        background: {
            required: false,
            type: Boolean,
            default: false
        },
        logOff: {
            required: false,
            type: Boolean,
            default: false
        },
        logoWhite: {
            required: false,
            type: Boolean,
            default: false
        },
        showBranding: {
            required: false,
            type: Boolean,
            default: true
        },
        showNav: {
            required: false,
            type: Boolean,
            default: true
        }
    }
};
</script>
<style scoped>
.logo svg {
    width: auto;
    height: 40px;
    fill: #000;
}

.logo-white.logo-white {
    fill: #fff;
}

@media (max-width: 720px) and (min-width: 240px) {
    .logo a {
        height: 30px;
        display: block;
    }

    .logo svg {
        width: auto;
        height: 30px;
        fill: #000;
    }
}
</style>
  