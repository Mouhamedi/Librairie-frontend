#!/bin/bash

generateFeature() {
    path="$1"
    feature_name=$(basename "$path")
    feature_dir="src/features/$feature_name"
    components_dir="$feature_dir/components"
    hooks_dir="$feature_dir/hooks"
    services_dir="$feature_dir/services"
    schema_dir="$feature_dir/schema"

    # Créer la structure de dossiers
    mkdir -p "$components_dir" "$hooks_dir" "$services_dir" "$schema_dir"
    
    # Créer les fichiers index.ts
    touch "$components_dir/index.ts"
    touch "$hooks_dir/index.ts"
    touch "$services_dir/index.ts"
    touch "$schema_dir/index.ts"
    
    echo "La fonctionnalité $feature_name a été créée avec succès."
}

generatePage() {
    path="$1"
    page_name=$(basename "$path")
    page_dir="src/pages/$page_name"
    routes_dir="$page_dir/routes"
    

    # Créer la structure de dossiers
    mkdir -p "$routes_dir"
    
    # Créer les fichiers index.ts
    touch "$routes_dir/routes.tsx"
    
    echo "La page $page_name a été créée avec succès."
}


# Vérifier si les arguments sont fournis
if [ $# -lt 2 ]; then
    echo "Veuillez fournir le chemin de la fonctionnalité et le type de génération."
    exit 1
fi

# Récupérer les arguments
generation_type="$1"
path="$2"

# Exécuter le traitement en fonction du type de génération
case "$generation_type" in
    "feature")
        generateFeature "$path"
        ;;
    "page")
        generatePage "$path"
        ;;
    *)
        echo "Type de génération invalide. Veuillez spécifier 'feature' ou 'page'."
        exit 1
        ;;
esac