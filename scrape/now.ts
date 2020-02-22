import { createDeployment } from 'now-client';
async function deploy() {
    let deployment;

    for await (const event of createDeployment({
        token: "YFITEeaK2hcot4hMFQY4jwbl",
        path: process.cwd(),
    })) {

        console.log(`now is ${event.type}!`)

        switch (event.type) {
            case 'error':
                console.log(event.payload)
                break;

        }

    }
    return deployment;
}
export default deploy
/* deploy().then((a) => {
    console.log(a)
}) */