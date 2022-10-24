<script>
    import {post} from "$lib/utils.js";

    let username = ''
    let password = ''
    let email = ''

    async function submit(event) {
        const response = await post(`users/Create`, {
            "email": 'example2002@gmail.com',
            "password": 'aaAaiiieieieiaaaaa2020',
            "username": 'example',
            "id": Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
        });


        console.log(response)
        console.log(response)
        console.log(response)
    }

    async function getUsers() {
        const response = await post('users/List')
        console.log(response)
        return response.users
    }

</script>
<svelte:head>
    <title>User</title>
    <meta name="description" content="Users of this app"/>
</svelte:head>

<div class="text-column">
    <h1>Users of this app</h1>
    <form on:submit|preventDefault={submit}>
        <fieldset class="form-group">
            <input
                    class="form-control form-control-lg"
                    type="email"
                    required
                    placeholder="Email"
                    bind:value={email}

            />
        </fieldset>
        <fieldset class="form-group">
            <input
                    class="form-control form-control-lg"
                    type="username"
                    required
                    placeholder="username"
                    bind:value={username}
            />
        </fieldset>
        <fieldset class="form-group">
            <input
                    class="form-control form-control-lg"
                    type="password"
                    required
                    placeholder="Password"
                    bind:value={password}

            />
        </fieldset>
        <button class="btn btn-lg btn-primary pull-xs-right" type="submit"> Create</button>
    </form>
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
                </tr>
            {/each}
            </tbody>
        </table>
    {/await}
</div>
