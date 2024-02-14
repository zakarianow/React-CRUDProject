import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'


const initialState= {records: [], loading: null, error: null, record: null};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
    
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch('http://localhost:8000/posts');
        const data = res.json();
        return data;
        
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (post, thunkAPI ) => {
    const {rejectWithValue} = thunkAPI;
    try {
        await fetch(`http://localhost:8000/posts/${post.id}`, {
            method: 'DELETE',
            headers: {'Content-type': 'application-json; charset=utf-8'}
        })
        return post;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const addPost = createAsyncThunk('posts/addPost', async (item, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const res = await fetch('http://localhost:8000/posts/', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        const data = res.json();
        return data;
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
});

export const fetchPost = createAsyncThunk('posts/fetchPost', async (id, thunkAPI) => {
    
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await fetch(`http://localhost:8000/posts/${id}`);
        const data = res.json();
        return data;
        
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const updatePost = createAsyncThunk('posts/updatePost', async (item, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
        const res = await fetch(`http://localhost:8000/posts/${item.id}`, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        const data = res.json();
        return data;
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
});
const PostSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        cleanData : (state, action) => {
            state.record = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.records = action.payload;
            
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        })
        //delete post
        .addCase(deletePost.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.records = state.records.filter(el => el.id != action.payload.id)
            // console.log(action.payload);
            
        }).addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        })
        //Add New Post
        .addCase(addPost.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(addPost.fulfilled, (state, action) => {
            state.loading = false;
            state.records.push(action.payload)
                        
        }).addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        })
        //get specific post
        .addCase(fetchPost.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload;
            
        }).addCase(fetchPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        })
        // update post
        .addCase(updatePost.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(updatePost.fulfilled, (state, action) => {
            state.loading = false;
            state.record = action.payload
            // console.log(action.payload)
                        
        }).addCase(updatePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        })
    }
        
});

export const {cleanData} = PostSlice.actions;
export default PostSlice.reducer;