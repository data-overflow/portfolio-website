<script>
  export let text = "hi mom";
  export let fontSize = "2.5vw";
</script>

<main>
  <button type="button" style="font-size: {fontSize};">{text}</button>
</main>

<style>
  button {
    text-align: center;
    border-radius: 2px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.1s;
  }
  button:hover {
    border-color: #fff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
</style>
