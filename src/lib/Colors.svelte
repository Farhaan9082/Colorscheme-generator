<script>
    import { Circle3 } from 'svelte-loading-spinners'
    import 'tippy.js/dist/tippy.css';
    import 'tippy.js/animations/scale.css';
    import 'tippy.js/themes/translucent.css';
    import { onMount } from 'svelte';
    import Clipboard from 'clipboard';
    import { delegate } from 'tippy.js';

    onMount(async () => {
        delegate('.colors-group', {
            trigger: 'click',
            target: '#copy',
            animation: 'scale',
            theme: 'translucent',
        })

        new Clipboard('#copy')
    })
    
    export let display_image, colors, wait
</script>

<svelte:head>
    <script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></script>
</svelte:head>
<section class="section colors-section">
    <div class="container colors-container">
        <img src={display_image} alt="">
        <div class="flex">
            <h3>Colors</h3>
        </div>
        <div class="colors-group">
            {#if wait}
                <div class="loader">
                    <h1>generating colors...</h1>
                    <Circle3></Circle3>
                </div>
            {:else}
                {#each colors as color}
                    <div class="colors">
                        <div class="color" style="background-color: {color};"></div>
                        <div class="color-code">
                            <p>HEX: {color}</p>
                            <span id="copy" data-tippy-content="copied!" data-clipboard-text={color}><span class="iconify" data-icon="akar-icons:copy"></span></span>
                        </div>
                    </div>
                {/each}
            {/if}         
        </div>
    </div>
</section>

<style lang="scss">
    .colors-container {
        border-radius: 8px;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;

        box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
        
        img {
            border-radius: 8px;
            align-self: center;
            max-height: 350px;
        }

        @include respond-to(small) {
            img {
                max-height: 400px;
            }
        }

        @include respond-to(vv-small) {
            img {
                height: 12rem;
            }
        }

        #copy {
            cursor: pointer;
        }

        .flex {
            display: flex;
            justify-content: center;
            padding-top: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #bdbdbd;

            h3 {
                font-weight: 400;
                letter-spacing: -0.5px;
                font-size: 0.95rem;
            }
        }

        .colors-group {
            padding: 1rem;
            display: grid;
            grid-template-columns: 47.5% 47.5%;
            gap: 5%;
            row-gap: 15%;

            .loader {
                display: flex;
                align-items: center;
                justify-content: space-between;
                grid-column: 1 / span 2;

                h1 {
                    font-size: 1.1rem;
                    font-weight: 400;
                }
            }
        }

        @include respond-to(very-small) {
            .colors-group {
                padding: 1rem 0;
            }
        }

        @include respond-to(vv-small) {
            .colors-group {
                grid-template-columns: 1fr;
                row-gap: 7%;
            }
        }        

        .colors {
            display: flex;
            align-items: center;
            justify-content: center;

            .color {
                width: 3rem;
                height: 3rem;
                border-radius: 5px;
                margin-right: 1rem;
            }

            @include respond-to(very-small) {
                .color {
                    margin-right: 0.5rem;
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }

            @include respond-to(vv-small) {
                .color {
                    width: 3.5rem;
                    height: 3.5rem;
                    margin-right: 1rem;
                }
            }

            .color-code {
                border: 1px solid #bdbdbd;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem 0.6rem;
                border-radius: 5px;
                width: 10rem;

                .iconify {
                    font-size: 1.4rem;
                }

                @include respond-to(medium) {
                    .iconify {
                        font-size: 1.2rem;
                    }
                }

                @include respond-to(vv-small) {
                    .iconify {
                        font-size: 1.5rem;
                    }
                }

                p {
                    font-size: 0.77rem;
                    font-weight: 500;
                }

                @include respond-to(large) {
                    p {
                        font-size: 0.7rem;
                    }
                }

                @include respond-to(very-small) {
                    p {
                        font-size: 0.6rem;
                    }
                }

                @include respond-to(vv-small) {
                    p {
                        font-size: 0.8rem;
                    }
                }
            }

            @include respond-to(very-small) {
                .color-code {
                    width: 7rem;
                }
            }

            @include respond-to(vv-small) {
                .color-code {
                    width: 12rem;
                    padding: 0.8rem 0.6rem;
                }
            }
        }
    }

    @include respond-to(vv-small) {
        .colors-container {
            height: 560px;
        }
    }
</style>