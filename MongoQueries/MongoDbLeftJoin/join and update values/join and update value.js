db.getCollection('users').aggregate([
     {
        $lookup:
        {
            from : 'songs',
            localField:'_id',
            foreignField:'artistId',
            as: 'statusDetail'
        }
    }, 
    {       
        $set:
        {
            "statusDetail.userType" : 2
        }       
    }
 ])