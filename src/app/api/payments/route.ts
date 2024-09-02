
import { NextRequest, NextResponse } from 'next/server'
import PaymentService from '@/services/Users/service';


export async function POST(
    request: NextRequest,
    // { params }: { params: { slug: string } }
) {

    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    // }

    // const awsId = session.user?.id;

    // const data = await request.json();
    const returnData = await PaymentService.getUsers(); // awsId, data
    return NextResponse.json(returnData, { status: 200 });
}
