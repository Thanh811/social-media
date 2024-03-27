import { Route, Routes } from "react-router-dom";
import AuthLayout from "@/_auth/AuthLayout";
import RootLayout from "@/_root/RootLayout";
import {ForgetPassword, SignInForm, SignUpForm} from "@/_auth/forms"
import { AllUsers, Chat, CreatePost, EditPost, Explore, Home, PostDetail, Profile, Saved, UpdateProfile } from "@/_root/pages";
import { Toaster } from "@/components/ui";
import RecoveryPassword from "./_auth/forms/RecoveryPassword";


function App() {
  return (
    <main className="flex h-screen">
      <Toaster />
      <Routes>
        {/* Public route */}
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInForm submitEvent={()=>{}}/>} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="recovery-password" element={<RecoveryPassword />} />
        </Route>

        {/* Private route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
