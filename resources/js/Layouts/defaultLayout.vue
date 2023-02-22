<script setup>
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';


</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-100">
            <!-- Page Navigation -->
            <nav class="bg-white border-b border-gray-100 sticky-top" v-if="$slots.nav">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="nav" />
                </div>
            </nav>

            <!-- Page Heading -->
            <header class="bg-white" v-if="$slots.header">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main v-if="$slots.main">
                <slot name="main"/>
            </main>

            <!-- Page Footer -->
            <footer class="bg-white" v-if="$slots.footer">
                <slot name="footer"/>

            </footer>

        </div>
    </div>
</template>
