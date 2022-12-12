<script>
    import {post} from "$lib/utils.js";
    import Modal from "$lib/components/Modal.svelte";
    import UserForm from "$lib/components/UserForm.svelte";
    export let data;

    let showEditModal = false;
    let modalFunction = null
    let username = ''
    let password = ''
    let email = ''
    let id = ''
    let users = data.body

    async function create(email, password, username) {
        const response = await post(`users/Create`, {
            email,
            password,
            username,
            "id": Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)

        });

        users = [...users, response.body.account]
    }

    // check if we are running in the browser
    // if (typeof window !== 'undefined') {
    //
    //     const API_URL = import.meta.env.VITE_API_URL;
    //
    //     console.log(API_URL)
    //     const connection = new WebSocket(API_URL)
    //     connection.onmessage = function (event) {
    //         // console.log(event.data)
    //     }
    // }

    async function update(email, password, username, id) {
        const response = await post(`users/Update`, {
            email,
            password,
            username,
            id
        });
        let user = users.find(element => element.id === id)
        user.email = email
        user.password = password
        user.username = username
        users = users
        await toggleModal()
    }

    // console.log(data)

    async function remove(id) {
        try {
            const response = await post(`users/Delete`, {
                email,
                password,
                username,
                id
            });
            users = users.filter(element => element.id !== id);
        } catch (e) {
            alert(JSON.stringify(e))
        }
    }

    async function toggleModal(user, f) {
        showEditModal = !showEditModal
        if (!showEditModal) {
            return
        }
        username = user.username
        password = user.password
        email = user.email
        modalFunction = f
        id = user.id
    }


</script>
<svelte:head>
    <title>User</title>
    <meta name="description" content="Users of this app"/>
</svelte:head>

<div class="text-column">
    <h1>Users of this app</h1>
    <UserForm {username} {password} {email} submitFunction={create}/>

    <table class="table">
        <thead>
        <tr>
            <th>username</th>
            <th>email</th>
        </tr>
        </thead>
        <tbody>
        {#if ('code' in data && data.code > 399)}
            {alert(JSON.stringify(data))}
        {:else}
            {#each users as user (user.id)}

                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <button on:click={()=>toggleModal(user, update)} type="edit">Edit</button>
                    <button on:click={()=>remove(user.id)} type="delete">Delete
                    </button>

                </tr>
            {/each}
        {/if}
        </tbody>
    </table>
</div>

{#if showEditModal}
    <Modal on:click>
        <div>
            <UserForm {username} {password} {email} {id} submitFunction={modalFunction}/>
        </div>
        <button on:click={()=>toggleModal()}>
            close
        </button>
    </Modal>
{/if}


