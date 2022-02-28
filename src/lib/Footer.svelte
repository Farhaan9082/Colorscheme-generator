<script>
    const date = new Date()
    let year = date.getFullYear()
</script>

<footer>
    <small>&copy; Copyright {year} - <a href="https://github.com/Farhaan9082">Farhaan Khan.</a> All Rights Reserved. <a href="https://www.flaticon.com/free-icons/color" title="color icons">icon</a></small>
</footer>

<style lang="scss">
    footer {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        background-color: #cbccff;
        padding: 1rem;
    }

    @include respond-to(small) {
        footer {
            margin-top: 6rem;
        }
    }
</style>