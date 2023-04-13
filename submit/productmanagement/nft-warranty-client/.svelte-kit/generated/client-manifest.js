export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\admin\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\customer\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\seller\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\src\\routes\\admin\\addAdmin.svelte"),
	() => import("..\\..\\src\\routes\\admin\\addSeller.svelte"),
	() => import("..\\..\\src\\routes\\admin\\checkAdmin.svelte"),
	() => import("..\\..\\src\\routes\\admin\\index.svelte"),
	() => import("..\\..\\src\\routes\\admin\\removeAdmin.svelte"),
	() => import("..\\..\\src\\routes\\customer\\amIOwner.svelte"),
	() => import("..\\..\\src\\routes\\customer\\findOwner.svelte"),
	() => import("..\\..\\src\\routes\\customer\\index.svelte"),
	() => import("..\\..\\src\\routes\\customer\\trackRepairs.svelte"),
	() => import("..\\..\\src\\routes\\customer\\trackWarranty.svelte"),
	() => import("..\\..\\src\\routes\\customer\\transferProduct.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\seller\\addProduct.svelte"),
	() => import("..\\..\\src\\routes\\seller\\index.svelte"),
	() => import("..\\..\\src\\routes\\seller\\sellProduct.svelte"),
	() => import("..\\..\\src\\routes\\seller\\serviceProduct.svelte")
];

export const dictionary = {
	"": [[0, 17], [1]],
	"about": [[0, 5], [1]],
	"admin": [[0, 2, 9], [1]],
	"customer": [[0, 3, 13], [1]],
	"seller": [[0, 4, 19], [1]],
	"admin/addAdmin": [[0, 2, 6], [1]],
	"admin/addSeller": [[0, 2, 7], [1]],
	"admin/checkAdmin": [[0, 2, 8], [1]],
	"admin/removeAdmin": [[0, 2, 10], [1]],
	"customer/amIOwner": [[0, 3, 11], [1]],
	"customer/findOwner": [[0, 3, 12], [1]],
	"customer/trackRepairs": [[0, 3, 14], [1]],
	"customer/trackWarranty": [[0, 3, 15], [1]],
	"customer/transferProduct": [[0, 3, 16], [1]],
	"seller/addProduct": [[0, 4, 18], [1]],
	"seller/sellProduct": [[0, 4, 20], [1]],
	"seller/serviceProduct": [[0, 4, 21], [1]]
};