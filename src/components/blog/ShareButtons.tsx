"use client"

export function ShareButtons({ title, url }: { title: string; url: string }) {
  function share(network: "facebook" | "x") {
    const encodedUrl = encodeURIComponent(url)
    const text = encodeURIComponent(title)
    const shareUrl =
      network === "facebook"
        ? `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
        : `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`

    const w = 600
    const h = 540
    const left = window.screenX + (window.outerWidth - w) / 2
    const top = window.screenY + (window.outerHeight - h) / 2.5
    window.open(
      shareUrl,
      "share-window",
      `menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=${h},width=${w},top=${top},left=${left}`,
    )
  }

  return (
    <div className="flex flex-col gap-6 mb-16">
      <h3 className="font-polaris font-medium text-lg leading-[1.333] text-[#5A5B5D]">
        Share this article
      </h3>
      <div className="flex items-center gap-10.5">
        <button
          type="button"
          onClick={() => share("x")}
          className="w-7 h-7 text-primary-900 hover:text-orange-600 transition-colors"
          aria-label="Share on X"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6662 11.8673L27.0916 0H24.6229L15.5664 10.3024L8.33778 0H0L10.9324 15.5804L0 28.0233H2.47022L12.0276 17.1422L19.6622 28.0233H28M3.36156 1.82311H7.15556L24.6198 26.2889H20.8258"
              fill="#211C41"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => share("facebook")}
          className="w-7 h-7 text-primary-900 hover:text-orange-600 transition-colors"
          aria-label="Share on Facebook"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9689 1.57156V26.4223C27.9689 27.2767 27.2767 27.9627 26.4286 27.9627H19.307V17.1493H22.9364L23.4789 12.9337H19.3007V10.2397C19.3007 9.01744 19.6375 8.18804 21.3898 8.18804H23.6223V4.41521C23.2357 4.36533 21.9137 4.24684 20.3671 4.24684C17.1493 4.24684 14.9417 6.21121 14.9417 9.8219V12.9337H11.2998V17.1493H14.9417V27.9689H1.57156C0.723455 27.9689 0.03125 27.2767 0.03125 26.4286V1.57156C0.03125 0.723455 0.723455 0.03125 1.57156 0.03125H26.4223C27.2767 0.03125 27.9689 0.723455 27.9689 1.57156Z"
              fill="#211C41"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
