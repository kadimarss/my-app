<script>
    import {post} from "$lib/utils.js";
    import Modal from "$lib/components/Modal.svelte";
    import UserForm from "$lib/components/UserForm.svelte";

    let showEditModal = false;
    let modalFunction = null
    let username = ''
    let password = ''
    let email = ''
    let id = ''
    let users = []
    async function create(email, password, username) {
        const response = await post(`users/Create`, {
            email,
            password,
            username,
            "id": Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
        });
    }

    async function update(email, password, username, id) {
        const response = await post(`users/Update`, {
            email,
            password,
            username,
            id
        });
    }

    async function remove(id) {
        try {
            const response = await post(`users/Delete`, {
                email,
                password,
                username,
                id
            });
            console.log(users)
            users = users.filter(element => element.id !== id);
            console.log(users)
        } catch (e) {
            alert(JSON.stringify(e))
        }
    }

    async function getUsers() {
        const response = await post('users/List')
        users = response.users
        return users
    }

    async function toggleModal(user, f) {
        showEditModal = !showEditModal
        if (!showEditModal) {return}
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
    {#await getUsers()}
        ...
    {:then users}

        <table class="table">
            <thead>
            <tr>
                <th>username</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
            {#each users as user (user.id)}
                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <button on:click={()=>toggleModal(user, update)}  type="edit">Edit</button>
                    <button onClick="window.location.reload()" on:click={()=>remove(user.id)}  type="delete">Delete</button>

                </tr>
            {/each}
            </tbody>
        </table>

    {/await}
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

