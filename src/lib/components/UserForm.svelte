<script>
    export let username
    export let password
    export let email
    export let submitFunction
    export let id = null
</script>
<form on:submit|preventDefault={submitFunction(email, password, username, id)}>
    <fieldset class="form-group form">
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
                class="form-control form-control-lg password"
                type="password"
                required
                placeholder="Password"
                bind:value={password}
        />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right create" type="submit" name="Create">Save</button>

</form>