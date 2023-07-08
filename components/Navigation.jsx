const Navigation = () => {
  return (
    <div className="h-10 flex items-center justify-end mt-4">
      <button>
      <div className="p-2 m-3 border-2 rounded-3xl px-10 hover:bg-amber-200 duration-1000">
        Sign Up
      </div>
      </button>

      <button>
      <div className="p-2 m-10 border-2 rounded-3xl px-10 hover:bg-amber-200 duration-1000">
        Login
      </div>
      </button>
    </div>
  );
}

export default Navigation;