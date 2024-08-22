<template>
    <main id="contact">
        <header>
            <h1>
                <span class="glitch">G</span>et in touch!
            </h1>
            <p>Just use the form below to contact me.
                Looking forward to hearing from you!</p>
        </header>
        <article class="contact-form">
            <form action="https://formspree.io/f/manwplpy" method="POST">
                <div class="form-group">
                    <label class="hun" for="firstname"></label>
                    <input class="hun" autocomplete="off" type="text" id="firstname" name="firstname"
                        placeholder="Your name here">
                </div>
                <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" id="name" name="name" required autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="_replyto" required autocomplete="off">
                </div>
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" required autocomplete="off"></textarea>
                </div>
                <button type="submit" @click.prevent="checkAndSubmit">Send</button>
            </form>
        </article>
    </main>
</template>

<script lang="ts" setup>
function checkAndSubmit() {
    const honeypot = document.querySelectorAll('.hun')[1] as HTMLInputElement;

    if (honeypot.value) {
        return;
    }

    const form = document.querySelector('form') as HTMLFormElement;
    form.requestSubmit();
}
</script>