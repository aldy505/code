function MadeWithLove() {
  return (
    <>
      <div class='text-xs opacity-75 hover:opacity-100 transition duration-500 ease-in-out'>
        <p>
          Made with&nbsp;
          <svg
            class='inline'
            viewBox='0 0 1792 1792'
            preserveAspectRatio='xMidYMid meet'
            xmlns='http://www.w3.org/2000/svg'
            style={{ height: '0.8rem' }}
          >
            <path
              d='M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z'
              fill='#e25555'
            />
          </svg>
          &nbsp;in Indonesia.
        </p>
        <p>
          Source code available on <a
            class='hover:underline transition duration-350 ease-in-out'
            href='https://www.github.com/aldy505/code'
          >Github.</a>
        </p>
      </div>
    </>
  );
}

export default MadeWithLove;
