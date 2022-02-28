<script>
    import Colors from "./Colors.svelte";

    let image
    $: display_image = "/image.jpg"
    $: colors = ['#ee935c', '#805c69', '#3b3b55', '#121324']
    $: wait = false

    const getcolor = async () => {
        wait = true
        let formdata = new FormData()
        formdata.append('image', image[0])
        display_image = URL.createObjectURL(image[0])

        try {
            const res = await fetch("https://colorscheme-api.herokuapp.com/color", {
                method: "POST",
                body: formdata
            })

            const data = await res.json()
            colors = data['colors']
            wait = false
        } catch(err) {
            wait = false
            display_image = "/image.jpg"
            colors = ['#ee935c', '#805c69', '#3b3b55', '#121324']
            alert('Failed to generate colors')
        }
    }
</script>

<section class="section hero-section">
    <div class="container hero-container">
        <div class="grid">
            <div class="grid-left">
                <h1>The simplest way to extract <span style="color: red;">c</span><span style="color: orange;">o</span><span style="color: #ffdf00;">l</span><span style="color: #00ff80;">o</span><span style="color: #0080ff;">u</span><span style="color: #5f29c4;">r</span><span style="color: violet;">s</span> from your images</h1>
                <p>Looking for a colour scheme that precisely complements your favourite photos? With our colour palette generator, you can create color combinations in seconds. Simply upload a photo, and we'll generate your palette based on the hues in the image.</p>
                <div class="file-input">
                    <label class="button" for="input">Use Your Image</label>
                    <input type="file" name="image" id="input" accept="image/png, image/jpeg" bind:files={image} on:change={getcolor}>
                </div>
                
                
            </div>
            <div class="grid-right">
                <Colors {display_image} {colors} {wait}/>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .hero-container {
        margin-top: 2rem;

        h1 {
            font-size: 4rem;
            line-height: 1.1;
            max-width: 13ch;
            color: #161616;
        }

        p {
            color: gray;
            font-size: 1.1rem;
            margin-top: 2rem;
            max-width: 40ch;
        }

        .button {
            padding: 1rem 1.8rem;
            background-color: black;
            border: none;
            border-radius: 8px;
            color: white;
            cursor: pointer;
        }

        .grid {
            display: grid;
            grid-template-columns: 47.5% 47.5%;
            gap: 5%;
            row-gap: 7%;

            .file-input {
                margin-top: 3rem;
                input[type="file"] {
                    display: none;
                }
            }
            
        }

        @include respond-to(large) {
            h1 {
                font-size: 3.5rem;
            }

            p {
                font-size: 1rem;
            }
        }

        @include respond-to(medium) {
            h1 {
                font-size: 3rem;
            }

            p {
                font-size: 0.9rem;
            }
        }

        @include respond-to(small) {
            .grid {
                grid-template-columns: 1fr;
            }

            h1 {
                font-size: 4rem;
            }

            p {
                font-size: 1.2rem;
                margin-bottom: 4rem;
            }
        }

        @include respond-to(very-small) {
            h1 {
                font-size: 3rem;
            }

            p {
                font-size: 0.9rem;
                margin-bottom: 4rem;
            }
        }
    }

    @include respond-to(small) {
        .hero-container {
            margin-top: 0;
        }
    }
</style>