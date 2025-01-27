import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">Contact Me</p>
        <div className=" flex justify-center flex-col items-center">
            <div className="max-w-lg w-full">
                <a target="_blank" rel="norefferer" href=" https://twitter.com/nn0ki/">
                    <div className="flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-twitter fa-2x" />
                        <p className="font-semibold text-xl">@nn0ki</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://t.me/nn0ki">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-telegram fa-2x" />
                        <p className="font-semibold text-xl">@nn0ki</p>
                    </div>
                </a>
                <a target="_blank" rel="norefferer" href="https://discord.com/users/994159473558040587">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fab fa-discord fa-2x" />
                        <p className="font-semibold text-xl">nn0ki</p>
                    </div>
                </a>
                <a href="mailto:n0ki@n0ki.tech">
                    <div className="mt-2 flex justify-between bg-zinc-500/5 hover:bg-zinc-500/10 transition-all duration-200 px-4 py-2 rounded-lg items-center">
                        <i className="fa fa-envelope fa-2x" />
                        <p className="font-semibold text-xl">n0ki@n0ki.tech</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
