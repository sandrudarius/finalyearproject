<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import CardList from '$lib/CardList.svelte';

  const data = [
    {
      name: 'Admin Panel',
      imageLink: 'admin.png',
      link: '/admin',
    },
    {
      name: 'Seller Panel',
      imageLink: 'seller.png',
      link: '/seller',
    },
    {
      name: 'Customer Panel',
      imageLink: 'customer.png',
      link: '/customer',
    },
  ];
</script>

<svelte:head>
  <title>NO FAKES!</title>
  <meta name="description" content="NFT Warranty Homepage" />
</svelte:head>

<h1>Real-Life Products Management on Blockchain</h1>

<CardList dataArray={data} />

<style>
  h1 {
    width: 100%;
  }
</style>
