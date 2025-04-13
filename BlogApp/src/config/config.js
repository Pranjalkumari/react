const config = {
    appwriteUrl : String(import.meta.env.VITE_APPWRTE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_Id),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID),
}

export default config