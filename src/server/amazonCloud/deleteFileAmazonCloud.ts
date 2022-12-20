import { s3Client } from "../../server/amazonCloud/client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
// import { getUserById } from "server/repositoryUser";
//
// const user = await getUserById(id)
// await deleteFileAmazonCloud("avatar-public-image", "167123006295810.png")

const deleteFile = async (Bucket: string, Key: string) => {
    await s3Client.send(new DeleteObjectCommand({ Bucket: process.env.AWS_PUBLIC_BUCKET_AVATAR_IMG, Key: Key }))
    return
}

module.exports  = deleteFile
