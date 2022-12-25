import { usePage } from "@inertiajs/inertia-react";

export default function hasAnyPermission(permissions) {
    // destruct auth from props
    const {auth} = usePage().props

    // get permission from props
    let allPermission = auth.permission;

    let hasPermission = false;

    permissions.forEach(function(item){
        if (allPermission[item]) hasPermission = true;
    });

    return hasPermission;
}