<div on:click|self class='modal'>
    <div class='content'>
        <slot/>
    </div>
</div>

<style>
    .modal {
        background-color: rgba(0, 0, 0, 0.589);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        background-color: white;
        width: 20em;
        height: 20em;
    }
</style>