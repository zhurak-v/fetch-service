import { api, abort_api } from "./api";

type Post = {
    userId: number,
    title: string,
    body: string
}

export async function getPost() {
    const response = await api.get<Post>('/posts/1');
    console.log(response);
}
getPost()

export async function postPost() {
    const body: Post = {
        userId: 1,
        title: "title",
        body: "some text"
    }
    const response = await api.post('/posts', body, {
        headers: { 'Custom-Header': 'value' },
    });
    console.log(response)
}
// postPost()

export async function putPost() {
    const body = {
        title: "title 2",
    }
    const response = await api.put('/posts/1', body, {
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
}
// putPost()

export async function deletePost() {
    const response = await api.delete('/posts/1');
    console.log(response);
}
// deletePost()

const controller = new AbortController();
export async function getWithAbort() {
    try {
        const response = await abort_api.get('/delay/10', {
            signal: controller.signal,
        });
        console.log(response);

        return response;
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}
// getWithAbort();
// setTimeout(() => controller.abort(), 3000);

