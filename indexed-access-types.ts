// const appUser = {
//     name: "Max",
//     age: 35, 
//     permissions: [{id: "p1", title: "Admin", description: "Admin access"}]
// }

// type AppUser1 = typeof appUser;

type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[];
};
type Perms = AppUser["permissions"]

// Accessing Array Elements With Indexed Access Types

type Perm = Perms[number]