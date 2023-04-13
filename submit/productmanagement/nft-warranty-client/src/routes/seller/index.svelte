<script>
  import List from '$lib/List.svelte';
  const list = [
    {
      name: 'Add Product',
      imageLink: 'add-product.svg',
      link: 'seller/addProduct',
    },
    {
      name: 'Sell Product',
      imageLink: 'sell-product.svg',
      link: 'seller/sellProduct',
    },
    
  ];
</script>

<h1>Seller Panel</h1>

<List {list} />
