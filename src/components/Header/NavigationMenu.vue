<template>
    <nav class="navbar navbar-expand-md">
        <div class="container">
            <div class="logo">
                <router-link to="/" class="navbar-brand">Home</router-link>
            </div>
            <div class="menu">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse1" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse1 navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="link in links" :key="link.id">
                            <router-link :to="link.path" class="nav-link">{{ link.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <RouterView />
</template>

<script>
export default {
    name: 'NavigationMenu',
    data() {
        return {
            links: [
                { id: 1, name: 'About', path: '/about' },
                { id: 2, name: 'Portfolio', path: '/portfolio' },
                { id: 3, name: 'Contact', path: '/contact' },
            ]
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';


.navbar-expand-md {
    .menu {
        .navbar-nav {
            .nav-item {
                &:first-child {
                    .nav-link {
                        @media (min-width: 768px) {
                            margin-left: 0;
                        }
                    }
                }

                &:last-child {
                    .nav-link {
                        @media (min-width: 768px) {
                            margin-right: 0;
                        }
                    }
                }
            }

            .nav-link {
                @media (min-width: 768px) {
                    padding-inline: 0;
                    margin-inline: 1rem;
                }


                &--active {
                    position: relative;
                    display: inline-block;

                    &:after {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 3px;
                        background-color: $accent-color;
                    }
                }
            }

        }
    }
}
</style>