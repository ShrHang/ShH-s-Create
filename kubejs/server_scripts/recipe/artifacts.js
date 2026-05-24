// requires: artifacts
ServerEvents.recipes(event => {
    createDeploying(event, 'curseofpandora:plain_charm', 'quark:bottled_cloud', 'artifacts:cloud_in_a_bottle');
});
