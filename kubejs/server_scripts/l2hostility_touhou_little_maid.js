ItemEvents.entityInteracted(event => {
    if (!(Platform.isLoaded('touhou_little_maid') && Platform.isLoaded('l2tabs'))) return;
    let _target = event.target;
    let _player = event.player;
    let _item = event.item;
    if (_target.type == 'touhou_little_maid:maid' && _player == _target.getOwner()) {
        if (Platform.isLoaded('l2magic') && _item == "shh:maid_tool") {
            if (_player.isShiftKeyDown()) {
                _item = Item.of("l2magic:equipment_wand");
            } else {
                _item = Item.of("l2magic:ai_config_wand");
            }
            _item.getItem().clickTarget(_item, _player, _target);
            event.cancel();
        }

        if (!Platform.isLoaded('l2hostility')) return;
        let cap = L2Hostility.of(_target);
        if (!cap) console.log("ShH--Error: Cannot get L2Hostility capability of TouhouLittleMaid.");
        if (_item == "l2hostility:bottle_of_curse" && !_player.isShiftKeyDown()) {
            // cap.lv += 100;
            cap.setLevel(_target, cap.level + 100);
            cap.syncToClient(_target);
            if (!_player.isCreative()) {
                event.item.count--
            }
            event.cancel()
        }
        if (_item == "l2hostility:bottle_of_sanity" && !_player.isShiftKeyDown()) {
            cap.reinit(_target, 0, true);
            cap.syncToClient(_target);
            if (!_player.isCreative()) {
                event.item.count--
            }
            event.cancel()
        }
        if (_item == "l2hostility:miracle_block" && !_player.isShiftKeyDown()) {
            cap.reinit(_target, cap.lv, true);
            cap.syncToClient(_target);
            if (!_player.isCreative()) {
                event.item.count--
            }
            event.cancel()
        }
    }
})
