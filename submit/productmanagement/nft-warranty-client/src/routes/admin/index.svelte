<script>
  import List from '$lib/List.svelte';
  const list = [
    {
      name: 'Add Admin',
      imageLink: 'add-admin.svg',
      link: 'admin/addAdmin',
    },
    {
      name: 'Remove Admin',
      imageLink: 'remove-admin.svg',
      link: 'admin/removeAdmin',
    },
    
    {
      name: 'Add Seller',
      imageLink: 'add-seller.svg',
      link: 'admin/addSeller',
    },
  ];
</script>

<h1>Admin Panel</h1>

<List {list} />
