// Wrap each character in a <span> so CSS can animate letters individually
$('.txt').html(function (_i, html) {
  const chars = html.trim().split('');
  return '<span>' + chars.join('</span><span>') + '</span>';
});
