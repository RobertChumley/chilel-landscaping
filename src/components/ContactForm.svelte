<script>
    import { user } from "./ContactStore.js";
    var hide=true;
    function handleClick() {
      
    };
</script>
    
    <style>
      .content {
        display: grid;
        grid-template-rows: subgrid;
      }
    </style>
    
    <h1>Send us an Email</h1>
    <div class="contact-form">
    <form class="content">
      <div class="contact-form--input" >
        <label>Name</label>
        <input type="text" bind:value={$user.name} />
      </div>

      <div class="contact-form--input" >
        <label>E-mail</label>
        <input class="contact-form--input" type="text" bind:value={$user.email} />
      </div>
      <div class="contact-form--input" >
        <label>Telephone</label>
        <input class="contact-form--input" type="text" bind:value={$user.phone} />
      </div>
    </form>
    <div class="contact-form--input" >
      <div></div>
      <button class="contact-form--button" on:click={handleClick}>
        <slot name="button-label" />
      </button>
    </div>
  </div>
    <p>
        {JSON.stringify($user, 0, 2)}</p>