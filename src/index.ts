class checkRegex {

    isImage(file: string): boolean {
        const reg = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|wepbp|JPG|JPEG|PNG|GIF|WEBP)$/)
        console.log("match images?", reg.test(file), file)
        return reg.test(file)
    }

    isVideo(file: string): boolean {
        const reg = new RegExp(/[^\s]+(.*?).(mp4|avi|vob|wmv|mov|flv|MP4|AVI|VOB|WMV|MOV|FLV)$/)
        console.log('reg test Video:', reg.test(file))
        return reg.test(file)
    }
    
    isEmail(file: string): boolean {
        const reg = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
        console.log('reg test Email:', reg.test(file))
        return reg.test(file)
    }
    
    isFrenchPhoneNumber(file: string): boolean {
        const reg = new RegExp(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
        console.log('reg test Phone number:', reg.test(file))
        return reg.test(file)
    }

}

// Usage
const p = new checkRegex()
p.isFrenchPhoneNumber('+336a5448823') // false
p.isVideo('https://site.com/video.mp4') // true