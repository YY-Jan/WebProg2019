var img, img_source;
var img_id = 0;
var img_list = [
    {src: 'images/pizza01.jpg', type: 1},
    {src: 'images/ntuosc.jpg', type: 1, source:'https://www.facebook.com/NTUOSC/photos/a.262609000564729/1258825157609770/'},
    {src: 'https://farm2.staticflickr.com/1678/24960910089_7638b783e6_k.jpg', type: 1,
        source: 'https://www.flickr.com/photos/othree/24960910089/in/photolist-EpKxfQ-ExT9B3-E2HbWM-F4Jamq-FQZXNb-FTj9cP-FTj8Pz-Fz4onQ-FZaQUr-F4JbVY-F4UYUR-od397q-F4V1PT-FWT12G-FR13Y1-Fz4kJo-T7GhCr-FWSYgN-Fz4qLY-F4Jhsj-of54qK-Fz4uxA-F4JiNf-Fz4uJs-FTjbMi-eyTfoc-FR17nf-FTjdxH-Fz4ofq-F4V6eK-FWT9Qd-FR16mY-FZaZyF-FTjm3H-FR13Pd-FTjmck-FWT7ew-FTjnAx-eyWfX5-eySc8F-FQZXX9-F4JpZU-FWT5hA-FR1crU-Fz4Nww-F4JF2s-FZb51M-S5gfRn-F4Vpsi-F4VezH/'},
    {src: 'https://farm2.staticflickr.com/1832/29118231217_ce9b7fa4af_k.jpg', type: 1,
        source: 'https://www.flickr.com/photos/hitcon/29118231217/'},
    {src: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/9ss0iRp9RGM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', type: 2, source: 'https://www.youtube.com/watch?v=9ss0iRp9RGM'},
]

function img_init() {
    img = document.getElementById('photo-image');
    img_source = document.getElementById('img-source');
    change_img();
    let preload_img = ['images/loading.gif'];
    for (let i = 0; i < img_list.length; ++i) {
        if (img_list[i].type === 1)
            preload_img.push(img_list[i].src);
    }
    preloadImages(preload_img);
}

function prev_img() {
    // img_id = img_id-1 >= 0 ? img_id-1 : img_list.length-1;
    if (img_id-1 >= 0) {
        img_id--;
        change_img();
    } else {
        img_id = 0;
    }
}

function next_img() {
    // img_id = img_id+1 < img_list.length ? img_id+1: 0;
    if (img_id+1 < img_list.length) {
        img_id++;
        change_img();
    } else {
        img_id = img_list.length-1;
    }
}

function change_img() {
    if (img_list[img_id].type === 1) {
        let image_check = new Image();
        image_check.src = img_list[img_id].src;
        if (image_check.complete) {
            img.innerHTML = '<img src="'+img_list[img_id].src+'" alt="">';
        } else {
            img.innerHTML = '<img src="images/loading.gif" alt="loading">';
            image_check.onload = function() {
                img.innerHTML = '<img src="'+img_list[img_id].src+'" alt="">';
            }
        }
    }
    else if (img_list[img_id].type === 2) {
        img.innerHTML = img_list[img_id].src;
    }
    img_source.href = !img_list[img_id].source ? img_list[img_id].src : img_list[img_id].source;
    if (img_id <= 0)
        document.getElementsByClassName("prev")[0].style.display = "none";
    else
        document.getElementsByClassName("prev")[0].style.display = "flex";
    if (img_id >= img_list.length-1)
        document.getElementsByClassName("next")[0].style.display = "none";
    else
        document.getElementsByClassName("next")[0].style.display = "flex";
}

function add_image_url() {
    let url = document.getElementsByName('add-image-url')[0].value;
    if (!url == "") {
        img_list.push({src: url, type: 1});
    }
    document.getElementsByName('add-image-url')[0].value = "";
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}
