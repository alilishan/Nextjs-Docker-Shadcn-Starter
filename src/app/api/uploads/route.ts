
import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from "fs/promises";
import { exec } from "child-process-promise";
import path from "path";
import axios from 'axios';
import { createReadStream } from 'fs';
import FormatBytes from '@/utils/FormatBytes';

import { env } from '@/lib/env';


const acceptedMimeTypes = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'image/jpg',
    'application/pdf',
];


interface UploadFile extends File {
    originalFilename: string;
}

export async function POST(
    request: NextRequest,
) {

    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    // }

    // const awsId = session.user.id;
    const formData = await request.formData();
    const file = formData.get("file") as UploadFile;

    console.log('FILE UPLOAD REQUEST:', file);

    if (!file) {
        return NextResponse.json({ message: "FAIL", error: "No files received." }, { status: 400 });
    }

    const maxFileSize = parseInt(env.APP_UPLOADS_SIZE as string) * 1024 * 1024;


    if(file.size > maxFileSize) {
        return NextResponse.json({ message: "FAIL", error: `File size (${FormatBytes(file.size)}) too large. Max allowed is ${FormatBytes(maxFileSize)}` }, { status: 400 });
    }

    // const buffer = Buffer.from(await file.arrayBuffer());

    // Set the filename to the original name of the file
    file.originalFilename = file.name;

    const filename =  file.name.replaceAll(" ", "_");
    const filePath = env.APP_UPLOADS_PATH + '/' + filename;
    const dockerFilepath = path.join(process.cwd(), filePath);

    try {
        // await writeFile(dockerFilepath, buffer);

        // const fileInfo = await exec(`file --mime-type ${dockerFilepath}`) as any;
        // const mimetype = fileInfo.stdout.split(': ')[1].trim();

        // if(!acceptedMimeTypes.includes(mimetype)) {
        //     await exec(`rm -f ${dockerFilepath}`);
        //     return NextResponse.json({ message: "FAIL", error: "Invalid file type." }, { status: 400 });
        // }

        // const config = await Gateway.getAxiosConfig(`media/upload`, {}, awsId, `media/upload/${awsId}`);
        // const formData = new FormData();
        //         formData.append('media', file, file.originalFilename);
        //         formData.append('appname', env.APP_NAME as string);

        // const request = {
        //     ...config,
        //     method: 'POST',
        //     data: formData,
        // }

        try {
            // const response = await axios.request(request);
            // const data = response.data;

            // console.log('FILE UPLOAD TO GATEWAY SUCCESS:', data);

            // Fake data for testing
            const data = {
                filename: filename,
                size: file.size,
                mimetype: '',
                path: filePath,
            }


            // Remove the file after upload
            // await exec(`rm -f ${dockerFilepath}`);

            return NextResponse.json({ message: "SUCCESS", status: 201, data });

        } catch (error: any) {
            console.log('FILE UPLOAD TO GATEWAY FAIL:', error);

            // Remove the file after upload
            await exec(`rm -f ${dockerFilepath}`);

            return NextResponse.json({ message: "FAIL", error: error.toString(), status: 500 });
        }


    } catch (error: any) {
        console.log("Error ocurred ", error);
        return NextResponse.json({ message: "FAIL", error: error.toString(), status: 500 });
    }

}
