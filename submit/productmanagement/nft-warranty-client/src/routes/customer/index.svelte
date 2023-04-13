<script>
  import List from '$lib/List.svelte';
  const list = [
    
    {
      name: 'Am I the Owner',
      imageLink: 'own-warranty.svg',
      link: 'customer/amIOwner',
    },
    
    {
      name: 'Transfer Product',
      imageLink: 'transfer.svg',
      link: 'customer/transferProduct',
    },
  ];
</script>

<h1>Customer Panel</h1>

<List {list} />
