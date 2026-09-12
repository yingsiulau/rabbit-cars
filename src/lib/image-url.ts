// AS24's CDN accepts a `w` query param controlling the delivered image width.
// Our data always stores the full-resolution (?w=1920) URL; call this to
// request a smaller variant for thumbnails instead of shipping full-size
// JPEGs to a 80-150px box.
export function resizeUrl(url: string, width: number): string {
  return url.replace(/([?&])w=\d+/, `$1w=${width}`);
}
