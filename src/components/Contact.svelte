<script lang="ts">
  let form: HTMLFormElement
</script>

<section id="contacto" class="container mb-28 scroll-mt-12 md:mb-44">
  <h2 class="text-3xl font-bold tracking-tight text-neutral md:text-4xl">
    Contáctanos
  </h2>
  <p class="my-3 max-w-md text-lg">
    Si tienes dudas sobre nuestros productos o servicios no dudes en mandarnos
    un mensaje.
  </p>
  <div class="mt-9 grid gap-y-12 sm:grid-cols-2 sm:gap-x-6 md:gap-x-9">
    <iframe
      class="h-full min-h-[24rem] w-full"
      src="https://maps.google.com/maps?q=omanxus&t=m&z=13&output=embed&iwloc=near"
      title="Omanxus"
      loading="lazy"
    />
    <form
      bind:this={form}
      class="grid gap-4 lg:grid-cols-2"
      novalidate
      on:submit|preventDefault={() => form.reset()}
    >
      <input type="text" placeholder="Nombre" />
      <input type="number" placeholder="Teléfono" />
      <input type="email" placeholder="Correo" />
      <input type="text" placeholder="Asunto" />
      <textarea
        class="textarea textarea-bordered textarea-secondary text-base
          lg:col-span-2"
        rows="7"
        placeholder="Mensaje"
      />
      <button
        class="btn btn-secondary btn-wide justify-self-end tracking-widest
          text-white lg:col-span-2"
      >
        Enviar
      </button>
    </form>
  </div>
</section>

<style lang="postcss">
  input {
    @apply input input-bordered input-secondary;
  }

  input,
  textarea {
    background-color: theme('colors.secondary / 5%');
    width: 100%;
  }

  ::placeholder {
    color: theme('colors.neutral / 50%');
  }
</style>
